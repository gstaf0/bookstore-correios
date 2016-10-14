package br.unicamp.bookstore.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;

import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.http.Request;
import com.github.tomakehurst.wiremock.http.RequestListener;
import com.github.tomakehurst.wiremock.http.Response;
import com.github.tomakehurst.wiremock.verification.LoggedRequest;

import br.unicamp.bookstore.Cliente;
import br.unicamp.bookstore.Pedido;
import br.unicamp.bookstore.Correios;
import br.unicamp.bookstore.dao.DadosDeEntregaDAO;
import br.unicamp.services.CorreiosServices;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.mockito.Mockito.*;


public class CalculoFreteSteps {

	private Cliente cliente;
	private Pedido pedido;
	private Correios correios;
	private DadosDeEntregaDAO saveDados;

	@Before
	public void setUp() {
	}

	//***********************************************************************
	@Given("^o cliente adicionou ao menos um produto ao carrinho de compras$")
	public void o_cliente_adicionou_ao_menos_um_produto_ao_carrinho_de_compras() throws Throwable {
		cliente = new Cliente();
		pedido = new Pedido();
		cliente.addPedido(pedido);

		// Correio's create mock
		saveDados = mock(DadosDeEntregaDAO.class);
		correios = new Correios(saveDados);
		correios.setApiUp(true);
	}

	@When("^o cliente preenche o CEP do endereco de entrega$")
	public void o_cliente_preenche_o_CEP_do_endereco_de_entrega() throws Throwable {
		cliente.setCep(1234567);
	}

	@Then("^o sistema se conecta ao servico dos Correios$")
	public void o_sistema_se_conecta_ao_servico_dos_Correios() throws Throwable {
		assertTrue(correios.connectToCorreios());
	}

	@Then("^verifica se a API esta online$")
	public void verifica_se_a_API_esta_online() throws Throwable {
		assertTrue(correios.getApiUp());
	}

	//***********************************************************************

	@Given("^existe ao menos um pedido no carrinho$")
	public void existe_ao_menos_um_pedido_no_carrinho() throws Throwable {
		pedido = new Pedido();
	}

	@Given("^servico dos correios esta operacional$")
	public void servico_dos_correios_esta_operacional() throws Throwable {
		// Correio's create mock
		saveDados = mock(DadosDeEntregaDAO.class);
		correios = new Correios(saveDados);
		correios.setApiUp(true);
	}

	@Given("^peso: (\\d+),$")
	public void peso(Double arg1) throws Throwable {
		pedido.setPeso(arg1);
	}

	@Given("^largura: (\\d+),$")
	public void largura(Double arg1) throws Throwable {
		pedido.setLargura(arg1);
	}

	@Given("^altura: (\\d+),$")
	public void altura(Double arg1) throws Throwable {
		pedido.setAltura(arg1);
	}

	@Given("^comprimento: (\\d+),$")
	public void comprimento(Double arg1) throws Throwable {
		pedido.setComprimento(arg1);
	}

	@Given("^tipo de entrega: \"([^\"]*)\",$")
	public void tipo_de_entrega(String arg1) throws Throwable {
		pedido.setTipoEntrega(arg1);
	}

	@Given("^CEP de origem (\\d+)$")
	public void cep_de_origem(int arg1) throws Throwable {
		pedido.setCepOrig(arg1);
	}

	@Given("^CEP de destino (\\d+)$")
	public void cep_de_destino(int arg1) throws Throwable {
		pedido.setCepDest(arg1);
	}

	@Given("^CEP de origem $")
	public void cep_de_origem() throws Throwable {		
		pedido.setCepOrig("");
	}

	@Given("^CEP de destino $")
	public void cep_de_destino() throws Throwable {
		pedido.setCepDest("");
	}

	@When("^sistema solicita o calculo do frete$")
	public void sistema_solicita_o_calculo_do_frete() throws Throwable {

		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();

		WireMock.stubFor(get(urlEqualTo("/calcularFrete?peso="+peso+"&"
		+"largura="+largura+"&"
		+"altura="+altura+"&"
		+"comprimento="+comprimento+"&"
		+"tipoEntrega="+tipoEntrega+"&"
		+"cepOrig="+cepOrig.toString()+"&"
		+"cepDest="+cepDest))
				.willReturn(aResponse()
						.withHeader("Content-Type", "text/plain")
						.withBody(CorreiosServices.calcFrete(peso,largura,altura,comprimento,tipoEntrega,cepOrig,cepDest)).withBody("aloooooooo")));

		correios.calcularFrete(pedido);
	}

	@When("^tempo de entrega$")
	public void tempo_de_entrega() throws Throwable {
		correios.estimarPrazoEntrega();
	}

	@Then("^sistema verifica a validade dos dados$")
	public void sistema_verifica_a_validade_dos_dados() throws Throwable {
		assertTrue(correios.validarDados());
	}

	@Then("^retorna valor do frete: \"([^\"]*)\",$")
	public void retorna_valor_do_frete(String arg1) throws Throwable {
		Double v = Double.parseDouble(arg1);
		assertEquals(v, correios.getValorFrete());
	}

	@Then("^retorna valor do frete: $")
	public void retorna_valor_do_frete() throws Throwable {
		assertEquals("", correios.getValorFrete());
	}
	
	@Then("^prazo de entrega: \"([^\"]*)\"$")
	public void prazo_de_entrega(String arg1) throws Throwable {
		assertEquals(arg1,correios.getPrazoEntrega());
	}

	@Then("^eventual mensagem de erro: \"([^\"]*)\"$")
	public void eventual_mensagem_de_erro(String arg1) throws Throwable {

	}


























	//******************************************************************************************
	@Given("^o SEDEX$")
	public void o_SEDEX() throws Throwable {
		//assertEquals("SEDEX", correios.getTipoEntrega());
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




	//************************************************************************************
	@Given("^Sistema tem acesso aos Correios$")
	public void sistema_tem_acesso_aos_Correios() throws Throwable {
		//  create mock
		saveDados = mock(DadosDeEntregaDAO.class);
		Correios correios = new Correios(saveDados);
	}

	@When("^Correios retorna prazo de entrega$")
	public void correios_retorna_prazo_de_entrega() throws Throwable {

		//Correios correios = mock();
		//assertTrue(correios.getApiUp());


	}

	@When("^valor do frete$")
	public void valor_do_frete() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//throw new PendingException();
	}

	@Then("^valores sao armazenados no sistema$")
	public void valores_sao_armazenados_no_sistema() throws Throwable {



		Integer prazoDeEntrega = correios.getPrazoEntrega();
		Double valorFrete = correios.getValorFrete();

		// Salva valores.
		correios.salvarInformacoes(valorFrete, prazoDeEntrega);

		verify(saveDados, times(1)).saveDadosDeEntrega(valorFrete,prazoDeEntrega);
	}

}
