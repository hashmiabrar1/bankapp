import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';
import { HttpClient } from '@angular/common/http';
import { CustomerRequest } from '../classes/customer-request';

@Injectable({
  providedIn: 'root'
})


export class CustomerRequestService {

  private url = "http://169.254.91.185:8182";
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }

  getCustomerRequestList(): Observable<CustomerRequest[]>{
    return this.http.get<CustomerRequest[]>(this.url);
  }
}
