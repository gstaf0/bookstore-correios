package br.unicamp.bookstore;

import java.util.Date;
import java.util.List;

public class Pedido {
	
	private int rastreamentoCodigo;
	private String statusEntrega;
	private Date prazoEntrega;
	
	private Double peso;
	private Double largura;
	private Double altura;
	private Double comprimento;
	private Integer cepOrig;
	private Integer cepDest;
	private String tipoEntrega;
	private String endereco;
	
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String arg) {
		endereco = arg;
	}
	public String getTipoEntrega() {
		return tipoEntrega;
	}
	public void setTipoEntrega(String arg) {
		tipoEntrega = arg;
	}
	public Integer getCepDest() {
		return cepDest;
	}
	public Integer getCepOrig() {
		return cepOrig;
	}
	public void setCepDest(Integer arg) {
		this.cepDest = arg;
	}
	public void setCepOrig(Integer arg) {
		this.cepOrig = arg;
	}
	public Double getPeso() {
		return peso;
	}
	public Double getLargura() {
		return largura;
	}
	public Double getAltura() {
		return altura;
	}
	public Double getComprimento() {
		return comprimento;
	}
	public void setPeso(Double arg) {
		this.peso = arg;
	}
	public void setLargura(Double arg) {
		this.largura = arg;
	}
	public void setAltura(Double arg) {
		this.altura = arg;
	}
	public void setComprimento(Double arg) {
		this.comprimento = arg;
	}
	
	public int getRastreamentoCodigo() {
		return rastreamentoCodigo;
	}
	
	public void setRastreamentoCodigo(int rastreamentoCodigo) {
		this.rastreamentoCodigo = rastreamentoCodigo;
	}
	
	public String getStatusEntrega() {
		return statusEntrega;
	}
	
	public void setStatusEntrega(String statusEntrega) {
		this.statusEntrega = statusEntrega;
	}
	
	public Date getPrazoEntrega() {
		return prazoEntrega;
	}
	
	public void setPrazoEntrega(Date prazoEntrega) {
		this.prazoEntrega = prazoEntrega;
	}

}
