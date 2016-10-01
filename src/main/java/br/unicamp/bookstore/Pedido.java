package br.unicamp.bookstore;

import java.util.Date;

public class Pedido {
	
	private int rastreamentoCodigo;
	private String statusEntrega;
	private Date prazoEntrega;
	
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
