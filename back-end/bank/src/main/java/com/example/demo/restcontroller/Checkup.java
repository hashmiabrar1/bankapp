package com.example.demo.restcontroller;

import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;

@RestController
public class Checkup {
	
	@GetMapping(path = "/greet", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity greet() {
		MyResponse resp = new MyResponse();
		resp.setMessage("welcome");
		return ResponseEntity.ok(resp);
	}

}
