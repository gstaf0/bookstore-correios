package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;
import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import br.unicamp.bookstore.Correios;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CalculoFreteSteps {
	
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
	
	@Given("^o cliente adicionou ao menos um produto ao carrinho de compras$")
	public void o_cliente_adicionou_ao_menos_um_produto_ao_carrinho_de_compras() throws Throwable {
		assertNotNull(pedido);
		assertNotEquals(0, pedido.getRastreamentoCodigo());
	}

	@When("^o cliente preenche o CEP do endereco de entrega$")
	public void o_cliente_preenche_o_CEP_do_endereco_de_entrega() throws Throwable {
		assertNotNull(cliente.getCep());
	}

	@Then("^o sistema solicita o acesso ao sistema do correios$")
	public void o_sistema_solicita_o_acesso_ao_sistema_do_correios() throws Throwable {
	    assertTrue(correios.getApiUp());
	}
	
	@Given("^o numero de produtos: (\\d+)$")
	public void o_numero_de_produtos(int arg1) throws Throwable {
	    assertEquals(arg1, correios.getProdQuant());
	}

	@Given("^os dados de cada produto: (\\d+), (\\d+), (\\d+) e (\\d+)$")
	public void os_dados_de_cada_produto_e(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		assertEquals(arg1, correios.getPesoProd());
		assertEquals(arg2, correios.getLarguraProd());
		assertEquals(arg3, correios.getAlturaProd());
		assertEquals(arg4, correios.getComprimentoProd());
	}

	@Given("^o PAC$")
	public void o_PAC() throws Throwable {
		assertEquals("PAC", correios.getTipoEntrega());
	}

	@Given("^o endereco de origem (\\d+)$")
	public void o_endereco_de_origem(int arg1) throws Throwable {
		assertEquals(arg1, correios.getCepOrig());
	}

	@When("^o cliente preenche o CEP do endereco de entrega (\\d+)$")
	public void o_cliente_preenche_o_CEP_do_endereco_de_entrega(int arg1) throws Throwable {
		assertEquals(arg1, correios.getCepDest());
	}

	@When("^o sistema está com acesso aos correios$")
	public void o_sistema_está_com_acesso_aos_correios() throws Throwable {
		assertTrue(correios.getApiUp());
	}

	@Then("^o sistema verifica a validade dos dados$")
	public void o_sistema_verifica_a_validade_dos_dados() throws Throwable {
		assertEquals("0: Processamento com Sucesso", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+), e eventual (\\d+): Processamento com Sucesso$")
	public void retorna_e_eventual_Processamento_com_Sucesso(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("0: Processamento com Sucesso", correios.getMensagemErro());
	}

	@Given("^o SEDEX$")
	public void o_SEDEX() throws Throwable {
		assertEquals("SEDEX", correios.getTipoEntrega());
	}

	@Then("^retorna (\\d+),(\\d+) e eventual -(\\d+): Peso excedido$")
	public void retorna_e_eventual_Peso_excedido(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-4: Peso Excedido", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+) e eventual -(\\d+): Largura Invalida$")
	public void retorna_e_eventual_Largura_Invalida(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-13: Largura Invalida", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+) e eventual -(\\d+): Altura Invalida$")
	public void retorna_e_eventual_Altura_Invalida(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-14: Altura Invalida", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+) e eventual -(\\d+): Comprimento Invalida$")
	public void retorna_e_eventual_Comprimento_Invalida(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-12: Comprimento Invalido", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+), e eventual -(\\d+): CEP Origem Invalido$")
	public void retorna_e_eventual_CEP_Origem_Invalido(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-2: CEP Origem Invalido", correios.getMensagemErro());
	}

	@Then("^retorna (\\d+),(\\d+) e eventual -(\\d+): CEP Destino Invalido$")
	public void retorna_e_eventual_CEP_Destino_Invalido(int arg1, int arg2, int arg3) throws Throwable {
		assertEquals(arg1, correios.getValorFrete(), 0);
		assertEquals(arg2, correios.getPrazoEntrega());
		assertEquals(arg3, correios.getMensagemErro());
		assertEquals("-3: CEP Destino Invalido", correios.getMensagemErro());
	}
	
}
