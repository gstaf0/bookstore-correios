package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotEquals;

import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StatusDeEntregaSteps {
	
	private Cliente cliente;
	private Pedido pedido;
	private Throwable throwable;
	
	@Before
    public void setUp() {
		cliente = new Cliente();
    	pedido = new Pedido();
    	
    	cliente.addPedido(pedido);
    	
    	throwable = null;
    }
	
	@Given("^codigo de rastreamento do pedido$")
	public void codigo_de_rastreamento_do_pedido() throws Throwable {
		assertNotNull(pedido);
		assertNotEquals(0, pedido.getRastreamentoCodigo());
	}

	@Given("^o cliente realizou ao menos uma compra$")
	public void o_cliente_realizou_ao_menos_uma_compra() throws Throwable {
		assertNotNull(pedido);
		equals(cliente.getPedidos().size()>0);
	}

	@Given("^o cliente esta logado no Sistema$")
	public void o_cliente_esta_logado_no_Sistema() throws Throwable {
		assertNotNull(pedido);
		assertNotEquals(0, pedido.getRastreamentoCodigo());
	}

	@When("^o cliente acionou opcao de consultar status de entrega$")
	public void o_cliente_acionou_opcao_de_consultar_status_de_entrega() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^o sistema exibe tela de consulta status de entrega do pedido$")
	public void o_sistema_exibe_tela_de_consulta_status_de_entrega_do_pedido() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Given("^o cliente esta logado no sistema$")
	public void o_cliente_esta_logado_no_sistema() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^o sistema recebe a situacao de entrega dos correios$")
	public void o_sistema_recebe_a_situacao_de_entrega_dos_correios() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Given("^codigo de rastreamento do pedido (\\d+)FA(\\d+)$")
	public void codigo_de_rastreamento_do_pedido_FA(int arg1, int arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Given("^o cliente (\\d+) realizou ao menos uma compra$")
	public void o_cliente_realizou_ao_menos_uma_compra(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@When("^o sistema dos correios retornou o status$")
	public void o_sistema_dos_correios_retornou_o_status() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+)FA(\\d+), Produto em separacao e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_em_separacao_e(int arg1, int arg2, int arg3, int arg4, int arg5) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+)FA(\\d+), Transporte em andamento e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Transporte_em_andamento_e(int arg1, int arg2, int arg3, int arg4, int arg5) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+)FA(\\d+), Produto entregue e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_entregue_e(int arg1, int arg2, int arg3, int arg4, int arg5) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}
}






