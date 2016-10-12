package br.unicamp.bookstore;

import java.util.List;
import java.util.ArrayList;

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
	
	public void calcularFrete() {
		
	}
	public void estimarPrazoEntrega() {
		
	}
	

}
