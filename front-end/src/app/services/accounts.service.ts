import { Injectable } from '@angular/core';
import { Accounts } from '../classes/accounts';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../classes/customer';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
})
}

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private url = "http://localhost:8182/app/accounts";
  private url2="http://localhost:8182/app/customers/login";
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }
  createAccount(uid: String, account: Accounts){
    return this.http.post<any>(this.url + '/creates/' + uid, account);
  }
  loginAccount(customer: Customer){
    return this.http.post<any>(this.url2, customer)
    
  }

  updateAccount(account: Accounts){
    return this.http.put<any>(this.url + '/updates/' + account.ano, account, httpOptions);
  }

  deleteAccount(uid: number){
    return this.http.delete<any>(this.url + '/deletes/' + uid, httpOptions);
  }

  getAccountsList(uid: number): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(this.url + '/lists/' + uid, httpOptions);
  }

  
}
