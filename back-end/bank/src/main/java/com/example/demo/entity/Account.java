package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ACCOUNTS")
public class Account {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private int ano;
	private long balance;
	private String atype;
	//Todo add date
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "UID")
	@JsonIgnore
	private Customer customer;
	
	
	
	
	public Account() {
		super();
	}




	public int getAno() {
		return ano;
	}




	public void setAno(int ano) {
		this.ano = ano;
	}




	public long getBalance() {
		return balance;
	}




	public void setBalance(long balance) {
		this.balance = balance;
	}




	public String getAtype() {
		return atype;
	}




	public void setAtype(String atype) {
		this.atype = atype;
	}




	public Customer getCustomer() {
		return customer;
	}




	public void setCustomer(Customer customer) {
		this.customer = customer;
	}




	public Account(int ano, long balance, String atype, Customer customer) {
		super();
		this.ano = ano;
		this.balance = balance;
		this.atype = atype;
	}




	

	
}
