package learn.springframework.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
public class IndexController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/details")
	public String getDetails() {
		String url = "http://localhost:8080/store";
		ResponseEntity<String> response = restTemplate.getForEntity(url + "/author", String.class);
		System.out.println("The response is : " + response.getBody());
		return response.getBody();
	}
}
