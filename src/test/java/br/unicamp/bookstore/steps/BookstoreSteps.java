package br.unicamp.bookstore.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.assertj.core.api.Assertions;

import br.unicamp.bookstore.*;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BookstoreSteps {
	private Bookstore bookstore;
	private Throwable throwable;
	private long resultado;

	@Before
	public void setUp() {
		bookstore = new Bookstore();
		throwable = null;
	}

	@Given("^I accessed Bookstore$")
	public void i_accessed_Bookstore() throws Throwable {
		assertNotNull(bookstore);
	}

	@When("^I search for \"([^\"]*)\" in \"([^\"]*)\"$")
	public void i_search_for_in(String arg1, String arg2) throws Throwable {
		resultado = bookstore.search(arg1, arg2);
	}

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
		resultado = bookstore.search(arg1, "");
	}

	@When("^I search$")
	public void i_search() throws Throwable {
		resultado = bookstore.search("", "");
	}

	@Then("^the result should be (\\d+)$")
	public void the_result_should_be(int arg1) throws Throwable {
		assertEquals(arg1, resultado);
	}
	
	@Then("^the result should be -(\\d+)$")
	public void the_result_should_be_negative(int arg1) throws Throwable {
		assertEquals(arg1, (-1*resultado));
	}
}
