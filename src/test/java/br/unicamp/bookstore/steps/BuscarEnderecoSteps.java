package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import br.unicamp.bookstore.Correios;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarEnderecoSteps {
	
	private Cliente cliente;
	private Pedido pedido;
	private Correios correios;
	private Throwable throwable;
	
	@Before
    public void setUp() {
		cliente = new Cliente();
    	pedido = new Pedido();
    	correios = new Correios();
    	
    	cliente.addPedido(pedido);
    	
    	throwable = null;
    }
	
	@Given("^o sistema está com acesso aos correios$")
	public void o_sistema_está_com_acesso_aos_correios() throws Throwable {
		assertTrue(correios.getApiUp());
	}

	@When("^o cliente preencheu o CEP do endereco de entrega (\\d+)$")
	public void o_cliente_preencheu_o_CEP_do_endereco_de_entrega(int arg1) throws Throwable {
		assertEquals(arg1, cliente.getCep());
	}

	@Then("^o sistema recebe o endereco fornecido pelos correios Avenida Doutor Luis de Tella, Barão Geraldo, Campinas$")
	public void o_sistema_recebe_o_endereco_fornecido_pelos_correios_Avenida_Doutor_Luis_de_Tella_Barão_Geraldo_Campinas() throws Throwable {
		assertEquals("Avenida Doutor Luis de Tella, Barão Geraldo, Campinas", correios.getEndereco(cliente.getCep()));
	}

	@Then("^o sistema recebe o endereco fornecido pelos correios Rua da Abolicao, Ponte Preta, Campinas$")
	public void o_sistema_recebe_o_endereco_fornecido_pelos_correios_Rua_da_Abolicao_Ponte_Preta_Campinas() throws Throwable {
		assertEquals("Rua da Abolicao, Ponte Preta, Campinas", correios.getEndereco(cliente.getCep()));
	}

	@Given("^o sistema não está com acesso aos correios$")
	public void o_sistema_não_está_com_acesso_aos_correios() throws Throwable {
		assertFalse(correios.getApiUp());
	}

	@When("^o cliente preencheu o CEP do endereco de entrega$")
	public void o_cliente_preencheu_o_CEP_do_endereco_de_entrega() throws Throwable {
		assertNotNull(cliente.getCep());
	}

	@Then("^o sistema informa um erro de falha de acesso$")
	public void o_sistema_informa_um_erro_de_falha_de_acesso() throws Throwable {
		assertNotNull(correios.getMensagemErro());
	}
	
}
