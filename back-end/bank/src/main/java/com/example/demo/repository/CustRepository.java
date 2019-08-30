package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Customer;

public interface CustRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select c from Customer c where c.flag=0")
	List<Customer> getPendingCustomersF();
	
	@Query("select c from Customer c where c.flag=1")
	List<Customer> getPendingCustomersT();
	
	@Query("select c.uid from Customer c where c.username=?1 and c.password=?2 and c.flag=1")
	Integer validateUser(String username, String password);
}
