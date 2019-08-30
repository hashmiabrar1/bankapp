package com.example.demo.entity;


public class TransactionDate{
	
	private String fromdate;
	private String todate ;
	
	public TransactionDate(){
		
	}
	public TransactionDate(String fromdate, String todate) {
		this.fromdate = fromdate;
		this.todate = todate;
	}
	public String getFromdate() {
		return fromdate;
	}
	public void setFromdate(String fromdate) {
		this.fromdate = fromdate;
	}
	public String getTodate() {
		return todate;
	}
	public void setTodate(String todate) {
		this.todate = todate;
	}

	
}