package br.unicamp.bookstore;

import java.util.ArrayList;
import java.util.List;

public class Cliente {
	
	private int clientId;
	private boolean isLogged;
	private long cep;
	
	
	private List<Pedido> pedidos;
	
	public Cliente() {
		pedidos = new ArrayList<Pedido>();
	}
	
	public void addPedido(Pedido pedido) {
		pedidos.add(pedido);
	}
	
	public List<Pedido> getPedidos() {
		return pedidos;
	}
	
	public void setPedidos(List<Pedido> pedidos) {
		this.pedidos = pedidos;
	}
	
	public int getClientId() {
		return clientId;
	}
	
	public void setClientId(int clientId) {
		this.clientId = clientId;
	}
	
	public boolean isLogged() {
		return isLogged;
	}
	
	public void setLogged(boolean isLogged) {
		this.isLogged = isLogged;
	}
	
	public long getCep() {
		return cep;
	}

	public void setCep(long cep) {
		this.cep = cep;
	}
	

}
