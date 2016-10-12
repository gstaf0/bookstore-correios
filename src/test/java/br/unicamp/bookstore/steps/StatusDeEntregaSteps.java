package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StatusDeEntregaSteps {
	
	private Cliente cliente;
	private Pedido pedido;
	
	@Before
    public void setUp() {
    }
	
	@Given("^codigo de rastreamento do pedido$")
	public void codigo_de_rastreamento_do_pedido() throws Throwable {
		pedido = new Pedido();
		pedido.setRastreamentoCodigo(1402551);
	}

	@Given("^o cliente realizou ao menos uma compra$")
	public void o_cliente_realizou_ao_menos_uma_compra() throws Throwable {
		cliente = new Cliente();
		cliente.addPedido(pedido);
	}

	@Given("^o cliente esta logado no Sistema$")
	public void o_cliente_esta_logado_no_Sistema() throws Throwable {
		cliente.setLogged(true);
	}

	@When("^o cliente acionou opcao de consultar status de entrega$")
	public void o_cliente_acionou_opcao_de_consultar_status_de_entrega() throws Throwable {
		pedido.setStatusEntrega("Transporte em andamento");
	}

	@Then("^o sistema exibe tela de consulta status de entrega do pedido$")
	public void o_sistema_exibe_tela_de_consulta_status_de_entrega_do_pedido() throws Throwable {
		assertTrue(cliente.isLogged());
		assertNotNull(cliente.getPedidos());
		assertEquals(1402551, pedido.getRastreamentoCodigo());
		assertEquals("Transporte em andamento", pedido.getStatusEntrega());
	}

	
	@Given("^o cliente esta logado no sistema$")
	public void o_cliente_esta_logado_no_sistema() throws Throwable {
		cliente = new Cliente();
		pedido = new Pedido();
		cliente.setLogged(true);
		cliente.addPedido(pedido);
		pedido.setStatusEntrega("Transporte em andamento");
	}

	@Then("^o sistema recebe a situacao de entrega dos correios$")
	public void o_sistema_recebe_a_situacao_de_entrega_dos_correios() throws Throwable {
		assertTrue(cliente.isLogged());
		assertNotNull(cliente.getPedidos());
		assertNotNull(pedido.getStatusEntrega());
	}
	
	@Given("^codigo de rastreamento do pedido (\\d+)$")
	public void codigo_de_rastreamento_do_pedido_FA(int arg1) throws Throwable {
		pedido = new Pedido();
		pedido.setRastreamentoCodigo(arg1);
	}

	@Given("^o cliente (\\d+) realizou ao menos uma compra$")
	public void o_cliente_realizou_ao_menos_uma_compra(int arg1) throws Throwable {
		cliente = new Cliente();
		cliente.setClientId(arg1);
		cliente.addPedido(pedido);
	}

	@When("^o sistema dos correios retornou o status$")
	public void o_sistema_dos_correios_retornou_o_status() throws Throwable {
		pedido.setStatusEntrega("Produto em separacao");
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+), Produto em separacao e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_em_separacao_e(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		pedido.setPrazoEntrega(arg2 + "/" + arg3 + "/" + arg4);
		assertNotNull(pedido);
		assertNotNull(cliente.getClientId());
		//assertEquals(arg1, pedido.getRastreamentoCodigo());
		assertEquals("Produto em separacao", pedido.getStatusEntrega());
		//assertEquals(arg2 + "/" + arg3 + "/" + arg4, pedido.getPrazoEntrega());
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+), Transporte em andamento e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Transporte_em_andamento_e(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		pedido.setStatusEntrega("Transporte em andamento");
		assertNotNull(pedido);
		assertNotNull(cliente.getClientId());
		//assertEquals(arg1, pedido.getRastreamentoCodigo());
		assertEquals("Transporte em andamento", pedido.getStatusEntrega());
		//assertEquals(arg2 + "/" + arg3 + "/" + arg4, pedido.getPrazoEntrega());
	}

	@Then("^o sistema exibe os detalhes de entrega do pedido com o (\\d+), Produto entregue e (\\d+)/(\\d+)/(\\d+)$")
	public void o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_entregue_e(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		pedido.setStatusEntrega("Produto entregue");
		assertNotNull(pedido);
		assertNotNull(cliente.getClientId());
		//assertEquals(arg1, pedido.getRastreamentoCodigo());
		assertEquals("Produto entregue", pedido.getStatusEntrega());
		//assertEquals(arg2 + "/" + arg3 + "/" + arg4, pedido.getPrazoEntrega());
	}
}
