package com.example.demo.restcontroller;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Account;
import com.example.demo.entity.Customer;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.CustRepository;

@RestController
@RequestMapping("/accounts")
public class AccountRestController {

	@Autowired
	AccountRepository accrepo;

	@Autowired
	CustRepository custrepo;

	@PostMapping(path = "/creates/{id}", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> accountCreate(@RequestBody Account ac, @PathVariable("id") int uid) {
		MyResponse resp = new MyResponse();
		Optional<Customer> cust = custrepo.findById(uid);
		if (cust.isPresent()) {
			ac.setBalance(5000);
			ac.setCustomer(cust.get());
			accrepo.save(ac);
			resp.setMessage("" + ac.getAno());
			return ResponseEntity.ok(resp);
		} else {
			return ResponseEntity.status(404).build();
		}
	}

	@GetMapping(path = "/lists/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Set<Account>> accountList(@PathVariable("id") int uid) {
		Optional<Customer> cust = custrepo.findById(uid);
		if (cust.isPresent()) {
			return ResponseEntity.ok(cust.get().getAccounts());
		} else {
			return ResponseEntity.status(404).build();
		}
	}

	@DeleteMapping(path = "/deletes/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<MyResponse> deleteEmp(@PathVariable("id") int ano) {
		MyResponse resp = new MyResponse();
		Optional<Account> acct = accrepo.findById(ano);
		if (acct.isPresent()) {
			accrepo.delete(acct.get());
			resp.setMessage(""+acct.get().getAno());
			return ResponseEntity.ok(resp);
		} else {
			return ResponseEntity.status(404).build();
		}
	}

	@PutMapping(path = "/updates/{id}", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity updateAccount(@RequestBody Account ac,@PathVariable("id") int ano) {
		MyResponse resp = new MyResponse();
		Optional<Account> acct = accrepo.findById(ano);
		if (acct.isPresent()) {
			acct.get().setAtype(ac.getAtype());
			accrepo.save(acct.get());
			resp.setMessage("" +acct.get().getAno());
			return ResponseEntity.ok(resp);
		} else {
			return ResponseEntity.status(404).build();
		}
	}
}