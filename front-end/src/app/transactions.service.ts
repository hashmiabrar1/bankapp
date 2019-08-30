import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Transactions } from './classes/transactions';
import { Observable } from 'rxjs';
import { Data } from './classes/data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
})
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private url="http://localhost:8182/app/transactions/transfer";
  private url2="http://localhost:8182/app/transactions/statement/";
  private url3="http://localhost:8182/app/transactions/statementDate/";
  constructor(private http: HttpClient) { }

  transfer(transactions: Transactions){
    return this.http.post<any>(this.url , transactions);
  }
  statement(id: number){
    return this.http.get<any>(this.url2+id);

  }
  statementDate(id: number, data: Data){
    return this.http.post<any>(this.url3+id,data);

  }


}
