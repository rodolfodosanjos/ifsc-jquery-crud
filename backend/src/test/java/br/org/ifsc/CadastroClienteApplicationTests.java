package br.org.ifsc;

import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CadastroClienteApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	public void test() {
		Cliente cliente = new Cliente();
		cliente.setNome("Robson");
		restTemplate.postForEntity("/clientes", cliente, Cliente.class);
		ResponseEntity<Cliente[]> clientes = restTemplate.getForEntity("/clientes", Cliente[].class);
		MatcherAssert.assertThat(clientes.getBody()[0].getId(), Matchers.is(Matchers.notNullValue()));
		MatcherAssert.assertThat(clientes.getBody()[0].getNome(), Matchers.equalTo("Robson"));
	}

}
