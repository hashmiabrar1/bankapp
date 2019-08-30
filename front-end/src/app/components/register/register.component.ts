import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
// import { CUSTOMERLIST } from 'src/app/MockCustomer';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Accounts } from 'src/app/classes/accounts';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = null

  public customer: Customer;
  public customerId: number = 0;
  public account: Accounts;
  public atype: String;

  confirmPass: string = ""

  constructor(private _loginService: LoginServiceService, private _router: Router, private customerService: CustomerServiceService, private accountService: AccountsService) {
    this.customer = new Customer(0,"","","","","","","");
    this.account = new Accounts(0,0,this.atype,0);
  }

  ngOnInit() {
  }

  registerUser() {
    // if (this.userObject.uname.trim() !== "" && this.userObject.upass.trim() !== "" && (this.userObject.upass.trim() === this.confirmPass))
    //   this._loginService.registerUser(this.userObject).subscribe((data) => {
    //     const result = data.body
    //     if (result['status'] === 200) {
    //       this.errorMessage = result['message'];
    //       setTimeout(() => {
    //         this._router.navigate(['/login']);
    //       }, 2000);
    //     }
    //   });
    this.customerService.saveCustomer(this.customer).subscribe((data) => {
      let customerId = data.message;
      let atype = this.atype;
      const result = data.body;
      this.customerId = data.message;
      console.log(this.customerId);
      // data.status = 'error';
      console.log(data);
      if (data.status == 'success'){
        this._router.navigate(['/registerConfirmation', this.customerId]);
      }else {
        this.errorMessage = 'Error Occured';
      }

      console.log(customerId, atype);
      this.account = new Accounts(0,0,atype,customerId);
      console.log('uid and ano', this.customerId, this.account.ano);
      this.accountService.createAccount(customerId, this.account).subscribe((data) =>{
        this.account.ano = data.message;
        console.log('account has successfully been created for the customer with account number:', this.account.ano, data.message);
      });
    });
    
}
}
