package com.example.demo.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Account;
import com.example.demo.entity.Customer;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.CustRepository;

@RestController
@RequestMapping("/admin")
public class AdminRestController {

	@Autowired
	AccountRepository accrepo;
	@Autowired
	CustRepository custrepo;

	@PostMapping(path = "/updates/{id}", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> updateAccountBalance(@RequestBody Account ac, @PathVariable("id") long amount) {
		MyResponse resp = new MyResponse();
		Optional<Account> acct = accrepo.findById(ac.getAno());
		if (acct.isPresent()) {
			acct.get().setBalance(acct.get().getBalance() + amount);
			accrepo.save(acct.get());
			resp.setMessage("" + acct.get().getBalance());
			resp.setStatus("success");
			return ResponseEntity.ok(resp);
		} else {
			resp.setStatus("error");
			return ResponseEntity.ok(resp);
		}
	}
	
	
	@PutMapping(path="/approve/{id}",produces= {MediaType.APPLICATION_JSON_VALUE },consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> approveCustomers(@PathVariable("id") int uid) {
		MyResponse resp = new MyResponse();
		Optional<Customer> cust = custrepo.findById(uid);
		if(cust.isPresent()) {
			cust.get().setFlag(1);
			//System.out.println(cust.get().getFlag());
			custrepo.save(cust.get());
			resp.setStatus("success");
			resp.setMessage(""+uid);
			return ResponseEntity.ok(resp);	
		}	
		else {
			return ResponseEntity.status(404).build();
		}
	}
	
	@PutMapping(path="/reject/{id}",produces="application/json")
	public ResponseEntity<MyResponse> rejectCustomers(@PathVariable("id") int uid) {
		MyResponse resp = new MyResponse();
		Optional<Customer> cust = custrepo.findById(uid);
		if(cust.isPresent()) {
			custrepo.delete(cust.get());
			resp.setStatus("success");
			resp.setMessage(""+uid);
			return ResponseEntity.ok(resp);	
		}	
		else {
			return ResponseEntity.status(404).build();
		}
	}
	
	@GetMapping(path="/lists0",produces="application/json")
    public ResponseEntity<List<Customer>> listCustomersF(){
		List<Customer> ls0= custrepo.getPendingCustomersF();
        return ResponseEntity.ok(ls0);
    }
	@GetMapping(path="/lists1",produces="application/json")
    public ResponseEntity<List<Customer>> listCustomersT(){
		List<Customer> ls1= custrepo.getPendingCustomersT();
        return ResponseEntity.ok(ls1);
    }
}

