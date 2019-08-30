import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { Customer } from 'src/app/classes/customer';
import {AccountsService} from 'src/app/services/accounts.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public customer: Customer;
  public username: String;
  public password: String;
  public uid: String;

  tfaFlag: boolean = false
  userObject = {
    uname: "",
    upass: ""
  }
  errorMessage: string = null
  constructor(private _loginService: LoginServiceService, private _router: Router, private _login: AccountsService) {
    this.username = '';
    this.customer = new Customer(0, '', '', '', '', '', '','');
  }

  ngOnInit() {
  }

  loginUser() {
    
  //   this._loginService.loginAuth(this.userObject).subscribe((data) => {
  //     this.errorMessage = null;
  //     if (data.body['status'] === 200) {
  //       this._loginService.updateAuthStatus(true);
  //       this._router.navigate(['/customerlist' + this.customer.username]);
  //     }
  //     if (data.body['status'] === 206) {
  //       this.tfaFlag = true;
  //     }
  //     if (data.body['status'] === 403) {
  //       this.errorMessage = data.body['message'];
  //     }
  //     if (data.body['status'] === 404) {
  //       this.errorMessage = data.body['message'];
  //     }
  //   })
  this._login.loginAccount(this.customer).subscribe((data)=>{
    console.log(data.message);
    this.uid=data.message;
    if(data.status=="success"){
      this._router.navigate(['/user', this.uid]);
    }
    else{
      this.errorMessage="Invalid Credentials";
      console.log("Invalid Credentials");
    }
  });



  }
}
