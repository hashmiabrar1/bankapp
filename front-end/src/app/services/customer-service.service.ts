import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
})
}

@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {

  // private url = "assets/images/jsondata/employees.json";
  private url = 'http://localhost:8182/app';
  
  // private url = 'http://169.254.91.185:8182/app';
  constructor(private http:HttpClient) { }
  // constructor() { }

  // registerCustomer(customer:Customer){

  // }
  // authenticateLogin(username: String): Observable<Customer[]>{
  //   return this.http.get<Customer[]>(this.url);
  // }

  validateAdminLogin(customer: Customer){
    return this.http.post<any>(this.url + '/customer', customer);
  }

  getCustomerRequests(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url + '/admin/lists0');
  }

  getCustomerList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url + '/admin/lists1');
  }

  acceptCustomer(uid: number): Observable<any>{
    return this.http.put<any>(this.url+'/admin/approve/' + uid, httpOptions);
    // return this.http.get<any>(this.url + '/customers/finds'+ uid);
  }

  rejectCustomer(uid: number){
    return this.http.put<any>(this.url + '/admin/reject/'+ uid, httpOptions);
  }

  saveCustomer(customer: Customer){
    return this.http.post<any>(this.url + '/customers/registers', customer);
  }

  findCustomer(uid: String): Observable<any>{
    return this.http.get<any>(this.url + '/customers/finds'+ uid);
  }

  updateCustomer(customer: Customer): Observable<any>{
    return this.http.put<any>(this.url + '/customers/updates/' + customer.uid, customer);
  }

  deleteCustomer(customer: Customer): Observable<any>{
    return this.http.delete<any>(this.url + '/customers/deletes/'+ customer.uid, httpOptions);
  }

}
