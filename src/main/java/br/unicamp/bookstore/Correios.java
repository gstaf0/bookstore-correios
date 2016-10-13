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

import br.unicamp.bookstore.dao.DadosDeEntregaDAO;

// Classe que atua como proxy para acesso aos serviços dos Correios.
public class Correios {
	
	private boolean apiUp; 
	private String mensagemErro;
	private Double valorFrete;
	private int prazoEntrega;
	private String enderecoEntrega;
	private DadosDeEntregaDAO dao;
	
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
		
		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();
		
		URIBuilder builder = new URIBuilder();
		builder.setScheme("http").setHost("localhost").setPort(8080).setPath("/calcularFrete")
		    .addParameter("peso",peso.toString())
		    .addParameter("largura",largura.toString())
		    .addParameter("altura",altura.toString())
		    .addParameter("comprimento",comprimento.toString())
		    .addParameter("tipoEntrega",tipoEntrega)
		    .addParameter("cepOrig",cepOrig.toString())
		    .addParameter("cepDest",cepDest.toString());
		
		URI uri = builder.build();
		HttpGet httpget = new HttpGet(uri);
		System.out.println(httpget.getURI());
		
		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpResponse httpResponse = httpClient.execute(httpget);
		String responseString = convertResponseToString(httpResponse);
		
		System.out.println(responseString);
	}
	
	private String convertResponseToString(HttpResponse response) throws IOException {
	    InputStream responseStream = response.getEntity().getContent();
	    Scanner scanner = new Scanner(responseStream, "UTF-8");
	    String responseString = scanner.useDelimiter("\\Z").next();
	    scanner.close();
	    return responseString;
	}
	
	public void estimarPrazoEntrega() {
		
	}
}
