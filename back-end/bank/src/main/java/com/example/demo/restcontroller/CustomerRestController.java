package com.example.demo.restcontroller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.repository.CustRepository;

@RestController
@RequestMapping("/customers")
public class CustomerRestController {

	@Autowired
	CustRepository custrepo;

	@PostMapping(path = "/registers", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> registerCustomer(@RequestBody Customer cu) {
		MyResponse resp = new MyResponse();		
		cu.setFlag(0);
		custrepo.save(cu);
		resp.setStatus("success");
		resp.setMessage(""+cu.getUid());
		System.out.println(resp);
		return ResponseEntity.ok(resp);

	}
	@PostMapping(path = "/login", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> loginCustomer(@RequestBody Customer cu) {
		MyResponse resp = new MyResponse();		
		Integer x=custrepo.validateUser(cu.getUsername(), cu.getPassword());
		if(x==null) {
			resp.setStatus("error");
			resp.setMessage(""+"Invalid Credentials");
			return ResponseEntity.ok(resp);
		}
		else {
		resp.setStatus("success");
		resp.setMessage(""+x);
		System.out.println(resp);
		return ResponseEntity.ok(resp);
		}
	}
	
	@GetMapping(path = "/finds/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Customer> findEmp(@PathVariable("id") int uid) {
		MyResponse resp=new MyResponse();
		Optional<Customer> cust = custrepo.findById(uid);
		if (cust.isPresent()) {
			return ResponseEntity.ok(cust.get());
		} else {
			return ResponseEntity.status(404).build();
		}

	}
	
	@PutMapping(path="/updates/{id}", produces={MediaType.APPLICATION_JSON_VALUE},consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Customer> updateEmp(@RequestBody Customer cu, @PathVariable("id")int uid) {
		Optional<Customer> cust = custrepo.findById(uid);
		if (cust.isPresent()) {
		cust.get().setName(cu.getName());
		cust.get().setAddress(cu.getAddress());
		cust.get().setPno(cu.getPno());
		cust.get().setEmail(cu.getEmail());
		cust.get().setOccupation(cu.getOccupation());
		cust.get().setUsername(cu.getUsername());
		cust.get().setPassword(cu.getPassword());
		custrepo.save(cust.get());		
		return ResponseEntity.ok(cust.get());
	}else {
		return ResponseEntity.status(404).build();
		}
	}
	
	@DeleteMapping(path="/deletes/{id}",produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<MyResponse> deleteEmp(@PathVariable("id") int uid) {
		MyResponse resp = new MyResponse();
		Optional<Customer> cust = custrepo.findById(uid);
		if(cust.isPresent()) {
		resp.setMessage(""+cust.get().getUid());
		custrepo.delete(cust.get());
		return ResponseEntity.ok(resp);
		}
		else {
			return ResponseEntity.status(404).build();
		}
	}
}
	
