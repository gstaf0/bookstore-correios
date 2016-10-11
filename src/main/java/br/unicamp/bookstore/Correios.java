package br.unicamp.bookstore;

import java.util.List;
import java.util.ArrayList;

import br.unicamp.bookstore.dao.DadosDeEntregaDAO;

public class Correios {
	
	private boolean apiUp; 
	private int prodQuant;
	private List<Integer> pesoProd;
	private List<Integer> larguraProd;
	private List<Integer> alturaProd;
	private List<Integer> comprimentoProd;
	private long cepOrig;
	private long cepDest;
	private String tipoEntrega;
	private String mensagemErro;
	private Double valorFrete;
	private int prazoEntrega;
	private String endereco;
	
	private DadosDeEntregaDAO dao;
	
	public Correios(DadosDeEntregaDAO dao) {
		pesoProd = new ArrayList<Integer>();
		larguraProd = new ArrayList<Integer>();
		alturaProd = new ArrayList<Integer>();
		comprimentoProd = new ArrayList<Integer>();
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
	
	public int getProdQuant() {
		return prodQuant;
	}

	public List<Integer> getPesoProd() {
		return pesoProd;
	}

	public List<Integer> getLarguraProd() {
		return larguraProd;
	}

	public List<Integer> getAlturaProd() {
		return alturaProd;
	}

	public List<Integer> getComprimentoProd() {
		return comprimentoProd;
	}

	public long getCepOrig() {
		return cepOrig;
	}

	public long getCepDest() {
		return cepDest;
	}

	public String getTipoEntrega() {
		return tipoEntrega;
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
	
	public String getEndereco(long cep) {
		return endereco;
	}
	
	public void setApiUp(boolean apiUp) {
		this.apiUp = apiUp;
	}
	
	public void setProdQuant(int prodQuant) {
		this.prodQuant = prodQuant;
	}

	public void setPesoProd(List<Integer> pesoProd) {
		this.pesoProd = pesoProd;
	}

	public void setLarguraProd(List<Integer> larguraProd) {
		this.larguraProd = larguraProd;
	}

	public void setAlturaProd(List<Integer> alturaProd) {
		this.alturaProd = alturaProd;
	}

	public void setComprimentoProd(List<Integer> comprimentoProd) {
		this.comprimentoProd = comprimentoProd;
	}

	public void setCepOrig(long cepOrig) {
		this.cepOrig = cepOrig;
	}

	public void setCepDest(long cepDest) {
		this.cepDest = cepDest;
	}

	public void setTipoEntrega(String tipoEntrega) {
		this.tipoEntrega = tipoEntrega;
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
	
	public void salvarInformacoes(Double valorFrete, Integer diasEntrega) {
		dao.saveDadosDeEntrega(valorFrete, diasEntrega);
	}

}
