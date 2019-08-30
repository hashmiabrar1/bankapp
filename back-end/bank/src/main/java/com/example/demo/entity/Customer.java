package com.example.demo.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;



@Entity
@Table(name="CUSTOMERS")
public class Customer {

	@Id @GeneratedValue(strategy=GenerationType.AUTO) 
	private int uid;
	private String name;
	private String address;
	private String email;
	private String pno;
	private String occupation;
	private String username;
	private String password;
	private int flag;
	
//	flag =0 customer is registered waiting for approval from admin
//	flag =1 customer is approved by admin
//	flag=2 customer is blocked
	
	
	
	
	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "UID")
	Set<Account> accounts = new HashSet<>();
	
	public Set<Account> getAccounts() {
		return accounts;
	}
	public void setAccounts(Set<Account> accounts) {
		this.accounts = accounts;
	}
	
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	public Customer(int uid, String username, String password, String name, String address, String email,
			String pno, String occupation, int flag) {
		super();
		this.uid = uid;
		this.username = username;
		this.password = password;
		this.name = name;
		this.address = address;
		this.email = email;
		this.pno = pno;
		this.occupation = occupation;
		this.flag = flag;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPno() {
		return pno;
	}
	public void setPno(String pno) {
		this.pno = pno;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}