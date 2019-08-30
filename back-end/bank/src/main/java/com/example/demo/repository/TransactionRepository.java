package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{

	@Query("select sum(amount) from Transaction where date=?1 and fromacc=?2")
	Integer getBalanceDate(String date,int fromacc);
	
	@Query("select t from Transaction t where t.fromacc=?1 or t.toacc=?1 order by t.ts desc")
	List<Transaction> getStatementTen(int ano);
	
	@Query("select t from Transaction t where (t.date>=?1 and t.date<=?2) and (t.fromacc=?3 or t.toacc=?3) ")
	List<Transaction>getStatementDate(String fromdate, String todate, int ano);
	
}
