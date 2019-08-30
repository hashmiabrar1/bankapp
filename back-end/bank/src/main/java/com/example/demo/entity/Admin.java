package com.example.demo.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Admin {

	@Id @GeneratedValue(strategy=GenerationType.AUTO) private long bid;
	private String busername;
	private String bpassword;
	private String bname;
	private String baddress;
	private String bemail;
	private String bpno;
	private String boccupation;
	public Admin() {}
	
	
	public Admin(long bid, String busername, String bpassword, String bname, String baddress, String bemail, String bpno,
			String boccupation) {
		super();
		this.bid = bid;
		this.busername = busername;
		this.bpassword = bpassword;
		this.bname = bname;
		this.baddress = baddress;
		this.bemail = bemail;
		this.bpno = bpno;
		this.boccupation = boccupation;
	}


	public long getBid() {
		return bid;
	}
	public void setBid(long bid) {
		this.bid = bid;
	}
	public String getBusername() {
		return busername;
	}
	public void setBusername(String busername) {
		this.busername = busername;
	}
	public String getBpassword() {
		return bpassword;
	}
	public void setBpassword(String bpassword) {
		this.bpassword = bpassword;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getBaddress() {
		return baddress;
	}
	public void setBaddress(String baddress) {
		this.baddress = baddress;
	}
	public String getBemail() {
		return bemail;
	}
	public void setBemail(String bemail) {
		this.bemail = bemail;
	}
	public String getBpno() {
		return bpno;
	}
	public void setBpno(String bpno) {
		this.bpno = bpno;
	}
	public String getBoccupation() {
		return boccupation;
	}
	public void setBoccupation(String boccupation) {
		this.boccupation = boccupation;
	}
	
	
}
