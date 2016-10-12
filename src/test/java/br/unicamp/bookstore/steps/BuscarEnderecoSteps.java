package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.mock;
import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import br.unicamp.bookstore.Correios;
import br.unicamp.bookstore.dao.DadosDeEntregaDAO;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarEnderecoSteps {
	
	private Cliente cliente;
	private Pedido pedido;
	private Correios correios;
	private DadosDeEntregaDAO saveDados;
	
	@Before
    public void setUp() {
    }
	
	@Given("^o sistema está com acesso aos correios$")
	public void o_sistema_está_com_acesso_aos_correios() throws Throwable {
		saveDados = mock(DadosDeEntregaDAO.class);
		correios = new Correios(saveDados);
		correios.setApiUp(true);
	}

	@When("^o cliente preencheu o CEP do endereco de entrega (\\d+)$")
	public void o_cliente_preencheu_o_CEP_do_endereco_de_entrega(int arg1) throws Throwable {
		pedido = new Pedido();
		pedido.setCepDest(arg1);
	}

	@Then("^o sistema recebe o endereco fornecido pelos correios Avenida Doutor Luis de Tella, Barão Geraldo, Campinas$")
	public void o_sistema_recebe_o_endereco_fornecido_pelos_correios_Avenida_Doutor_Luis_de_Tella_Barão_Geraldo_Campinas() throws Throwable {
		assertTrue(correios.getApiUp());
		//assertEquals("Avenida Doutor Luis de Tella, Barão Geraldo, Campinas", cliente.getCep());
		assertEquals(13083000, pedido.getCepDest());
	}

	@Then("^o sistema recebe o endereco fornecido pelos correios Rua da Abolicao, Ponte Preta, Campinas$")
	public void o_sistema_recebe_o_endereco_fornecido_pelos_correios_Rua_da_Abolicao_Ponte_Preta_Campinas() throws Throwable {
		assertTrue(correios.getApiUp());
		//assertEquals("Rua da Abolicao, Ponte Preta, Campinas", cliente.getCep());
		assertEquals(13041445, pedido.getCepDest());
	}

	@Given("^o sistema não está com acesso aos correios$")
	public void o_sistema_não_está_com_acesso_aos_correios() throws Throwable {
		saveDados = mock(DadosDeEntregaDAO.class);
		correios = new Correios(saveDados);
		correios.setApiUp(false);
		correios.setMensagemErro("Correios inacessivel");
	}

	@When("^o cliente preencheu o CEP do endereco de entrega$")
	public void o_cliente_preencheu_o_CEP_do_endereco_de_entrega() throws Throwable {
		pedido = new Pedido();
		pedido.setCepDest(13083000);
	}

	@Then("^o sistema informa um erro de falha de acesso$")
	public void o_sistema_informa_um_erro_de_falha_de_acesso() throws Throwable {
		assertFalse(correios.getApiUp());
		assertNotNull(pedido.getCepDest());
		assertEquals("Correios inacessivel", correios.getMensagemErro());
	}
	
}
