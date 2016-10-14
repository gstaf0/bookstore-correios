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
	
	@Given("^peso: ,$")
	public void peso() throws Throwable {
		pedido.setPeso(null);
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
		
		System.out.println("sistema_solicita_o_calculo_do_frete() enter");
		
		String pesoStr;
		 
		CorreiosServices cs = new CorreiosServices();

		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();
		
		String frete = cs.calcFrete(peso, largura, altura, comprimento, tipoEntrega, cepOrig, cepDest);

		System.out.println("Tipo de entrega: "+tipoEntrega+" - Frete: "+frete);
		
		if(peso==null) {
			pesoStr = "";
		} else {
			pesoStr = peso.toString();
		}
		
		WireMock.stubFor(get(urlEqualTo("/calcularFrete?peso="+pesoStr+"&"
		+"largura="+largura+"&"
		+"altura="+altura+"&"
		+"comprimento="+comprimento+"&"
		+"tipoEntrega="+tipoEntrega+"&"
		+"cepOrig="+cepOrig.toString()+"&"
		+"cepDest="+cepDest)).willReturn(aResponse().withStatus(cs.getStatus()).withHeader("Content-Type", "text/plain").withBody(frete)));

		System.out.println("Após Wiremock");
		
		correios.calcularFrete(pedido);
		
		System.out.println("sistema_solicita_o_calculo_do_frete() out");
	}

	@When("^tempo de entrega$")
	public void tempo_de_entrega() throws Throwable {
		
		String pesoStr;
		
		CorreiosServices cs = new CorreiosServices();

		Double peso = pedido.getPeso();
		Double largura = pedido.getLargura();
		Double altura = pedido.getAltura();
		Double comprimento = pedido.getComprimento();
		String tipoEntrega = pedido.getTipoEntrega();
		Long cepOrig = pedido.getCepOrig();
		Long cepDest = pedido.getCepDest();
		
		String frete = cs.calcFrete(peso, largura, altura, comprimento, tipoEntrega, cepOrig, cepDest);
		String prazo = cs.calcPrazo(tipoEntrega);
		
		System.out.println("Prazo: "+prazo);
		
		if(peso==null) {
			pesoStr = "";
		} else {
			pesoStr = peso.toString();
		}
		
		WireMock.stubFor(get(urlEqualTo("/calcularPrazo?peso="+pesoStr+"&"
		+"largura="+largura+"&"
		+"altura="+altura+"&"
		+"comprimento="+comprimento+"&"
		+"tipoEntrega="+tipoEntrega+"&"
		+"cepOrig="+cepOrig.toString()+"&"
		+"cepDest="+cepDest)).willReturn(aResponse().withStatus(cs.getStatus()).withHeader("Content-Type", "text/plain").withBody(prazo)));
		
		correios.estimarPrazoEntrega(pedido);
	}
	
	@Then("^sistema retorna valor do frete: \"([^\"]*)\",$")
	public void sistema_retorna_valor_do_frete(String arg1) throws Throwable {
		Double v = Double.parseDouble(arg1);
		assertEquals(v, correios.getValorFrete());
	}

	@Then("^retorna valor do frete: $")
	public void retorna_valor_do_frete() throws Throwable {
		assertEquals("", correios.getValorFrete());
	}
	
	@Then("^prazo de entrega: \"([^\"]*)\"$")
	public void prazo_de_entrega(String arg1) throws Throwable {
		int prazo = Integer.parseInt(arg1);
		assertEquals(prazo,correios.getPrazoEntrega());
	}

	@Then("^eventual mensagem de erro: \"([^\"]*)\"$")
	public void eventual_mensagem_de_erro(String arg1) throws Throwable {

	}

	//************************************************************************************
	@Given("^Sistema tem acesso aos Correios$")
	public void sistema_tem_acesso_aos_Correios() throws Throwable {
		//  create mock
		saveDados = mock(DadosDeEntregaDAO.class);
		correios = new Correios(saveDados);
	}
	
	@When("^Correios retorna valor do frete \\$\"([^\"]*)\"$")
	public void correios_retorna_valor_do_frete_$(String arg1) throws Throwable {
		correios.setValorFrete(Double.parseDouble(arg1));
	}

	@When("^prazo de entrega (\\d+)$")
	public void prazo_de_entrega(int arg1) throws Throwable {
		correios.setPrazoEntrega(arg1);
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
