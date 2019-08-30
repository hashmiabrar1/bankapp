package com.example.demo.entity;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "TRANSACTIONS")
public class Transaction {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private int tid;
	private int fromacc;
	private int toacc;
	private long frombal;
	private long tobal;
	private int flag;
	private long amount;
	private String date;
	private Timestamp ts;

	
	public Transaction() {
	}






	public String getDate() {
		return date;
	}






	public void setDate(String date) {
		this.date = date;
	}






	public Transaction(int tid, int fromacc, int toacc, long frombal, long tobal, int flag, long amount, String date,
			Timestamp ts) {
		super();
		this.tid = tid;
		this.fromacc = fromacc;
		this.toacc = toacc;
		this.frombal = frombal;
		this.tobal = tobal;
		this.flag = flag;
		this.amount = amount;
		this.date = date;
		this.ts = ts;
	}






	public long getAmount() {
		return amount;
	}



	public void setAmount(long amount) {
		this.amount = amount;
	}



	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public int getFromacc() {
		return fromacc;
	}

	public void setFromacc(int fromacc) {
		this.fromacc = fromacc;
	}

	public int getToacc() {
		return toacc;
	}

	public void setToacc(int toacc) {
		this.toacc = toacc;
	}

	public long getFrombal() {
		return frombal;
	}

	public void setFrombal(long frombal) {
		this.frombal = frombal;
	}

	public long getTobal() {
		return tobal;
	}

	public void setTobal(long tobal) {
		this.tobal = tobal;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public Timestamp getTs() {
		return ts;
	}

	public void setTs(Timestamp ts) {
		this.ts = ts;
	}
	

}
