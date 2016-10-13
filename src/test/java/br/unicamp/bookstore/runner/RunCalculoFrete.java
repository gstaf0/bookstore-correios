package br.unicamp.bookstore.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.*;
import com.github.tomakehurst.wiremock.client.WireMock;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.bookstore.steps",
        features = "classpath:features/CalculoFrete.feature"
)
public class RunCalculoFrete {

	private static WireMockServer wireMockServer;
	
	@BeforeClass
	public static void runBeforeClass(){
		WireMockServer wireMockServer = new WireMockServer(wireMockConfig().port(8089)); //No-args constructor will start on port 8080, no HTTPS
		WireMock.configureFor(8089);
		wireMockServer.start();
	}
	
	@AfterClass
	public static void afterClass(){
		wireMockServer.stop();
	}
}
