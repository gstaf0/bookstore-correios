package br.unicamp.bookstore;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import br.unicamp.bookstore.dao.DadosDeEntregaDAO;

// Classe que atua como proxy para acesso aos serviços dos Correios.
public class Correios {

	private boolean apiUp; 
	private String mensagemErro;
	private Double valorFrete;
	private int prazoEntrega;
	private String enderecoEntrega;
	private DadosDeEntregaDAO dao;
	String retMensagem; 

	public Correios(DadosDeEntregaDAO dao) {
		this.dao = dao;
	}

	// Verifica se a API esta operacional.
	public boolean getApiUp() {
		return apiUp;
	}

	// Método que faz todo o procedimento de conexão segura com os Correios.
	public boolean connectToCorreios() {
		return true;
	}

	public String getMensagemErro() {
		return mensagemErro;
	}

	public Double getValorFrete() {
		return valorFrete;
	}

	public int getPrazoEntrega() {
		return prazoEntrega;
	}

	public String getEnderecoEntrega(long cep) {
		return enderecoEntrega;
	}

	public void setApiUp(boolean apiUp) {
		this.apiUp = apiUp;
	}

	public void setMensagemErro(String mensagemErro) {
		this.mensagemErro = mensagemErro;
	}

	public void setValorFrete(Double valorFrete) {
		this.valorFrete = valorFrete;
	}

	public void setPrazoEntrega(int prazoEntrega) {
		this.prazoEntrega = prazoEntrega;
	}

	public void setEnderecoEntrega(String enderecoEntrega, long cep) {
		this.enderecoEntrega = enderecoEntrega;
	}

	public void salvarInformacoes(Double valorFrete, Integer diasEntrega) {
		dao.saveDadosDeEntrega(valorFrete, diasEntrega);
	}

	public Boolean validarDados() {
		return true;
	}

	public void calcularFrete(Pedido pedido) throws ClientProtocolException, IOException, URISyntaxException {

		System.out.println("calcularFrete(Pedido pedido) enter");
		String pesoStr;

		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();

		if(peso==null) {
			pesoStr = "";
		} else {
			pesoStr = peso.toString();
		}

		URIBuilder builder = new URIBuilder();
		builder.setScheme("http").setHost("localhost").setPort(8080).setPath("/calcularFrete")
		.addParameter("peso",pesoStr)
		.addParameter("largura",largura.toString())
		.addParameter("altura",altura.toString())
		.addParameter("comprimento",comprimento.toString())
		.addParameter("tipoEntrega",tipoEntrega)
		.addParameter("cepOrig",cepOrig.toString())
		.addParameter("cepDest",cepDest.toString());

		URI uri = builder.build();
		HttpGet httpget = new HttpGet(uri);

		System.out.println("Print uri: "+uri.toString());

		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpResponse httpResponse = httpClient.execute(httpget);
		String freteStr = getReturnedValue(httpResponse);

		int code = httpResponse.getStatusLine().getStatusCode();

		System.out.println("Response code: "+code);

		retMensagem = getResponseMessage(code);

		if(freteStr=="") {
			this.valorFrete = (double) -1.0;
		} else {
			this.valorFrete = Double.parseDouble(freteStr);
		}

		System.out.println("calcularFrete(Pedido pedido) out");
	}

	private String getReturnedValue(HttpResponse response) throws IOException {
		System.out.println("getReturnedValue enter");
		String value;
		InputStream responseStream = response.getEntity().getContent();
		Scanner scanner = new Scanner(responseStream, "UTF-8");
		value = scanner.useDelimiter("\\Z").next();
		scanner.close();
		System.out.println("getReturnedValue out");
		return value;
	}

	public void estimarPrazoEntrega(Pedido pedido) throws URISyntaxException, ClientProtocolException, IOException {
		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();
		String pesoStr;
		
		if(peso==null) {
			pesoStr = "";
		} else {
			pesoStr = peso.toString();
		}

		URIBuilder builder = new URIBuilder();
		builder.setScheme("http").setHost("localhost").setPort(8080).setPath("/calcularPrazo")
		.addParameter("peso",pesoStr)
		.addParameter("largura",largura.toString())
		.addParameter("altura",altura.toString())
		.addParameter("comprimento",comprimento.toString())
		.addParameter("tipoEntrega",tipoEntrega)
		.addParameter("cepOrig",cepOrig.toString())
		.addParameter("cepDest",cepDest.toString());

		URI uri = builder.build();
		HttpGet httpget = new HttpGet(uri);

		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpResponse httpResponse = httpClient.execute(httpget);
		String prazoStr = getReturnedValue(httpResponse);

		int code = httpResponse.getStatusLine().getStatusCode();

		System.out.println("Response code: "+code);

		retMensagem = getResponseMessage(code);

		this.prazoEntrega = Integer.parseInt(prazoStr);
	}

	String getResponseMessage(int code) {
		String ret;

		switch(code) {
		case 200:
			ret = "Processamento com Sucesso";
			break;
		case 501:
			ret = "Campo Peso não foi preenchido";
			break;
		case 502:
			ret = "CEP Origem Invalido";
			break;
		case 503:
			ret = "CEP Destino Invalido"; 
			break;
		case 504:
			ret = "Peso excedido";
			break;
		case 505:
			ret = "Largura Invalida";
			break;
		case 506:
			ret = "Altura Invalida";
			break;
		case 507:
			ret = "Comprimento Invalido";
			break;
		case 508:
			ret = "Campo Tipo de Entrega não foi preenchido";
			break;
		case 509:
			ret = "Campo CEP Origem não foi preenchido";
			break;
		case 510:
			ret = "Campo CEP Destino não foi preenchido";
			break;
		default:
			ret = "Return Message Error....";
		}

		return ret;
	}
}
