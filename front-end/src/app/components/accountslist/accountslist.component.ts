import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounts } from 'src/app/classes/accounts';
import { AccountsService } from 'src/app/services/accounts.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'app-accountslist',
  templateUrl: './accountslist.component.html',
  styleUrls: ['./accountslist.component.css']
})
export class AccountslistComponent implements OnInit {
  public accountsList: Accounts[] = [];
  public selectedId: number;
  public atype: String = '';
  public account: Accounts = new Accounts(0,0,'',0);

  constructor(private accountService: AccountsService, private router: Router, private route: ActivatedRoute) {
    // this.accountsList = 
   }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('uid'));
    this.selectedId = parseInt(this.route.snapshot.paramMap.get('uid'));
    // this.selectedId = this.route.snapshot.paramMap.get('uid');
    this.accountService.getAccountsList(this.selectedId).subscribe(data => {
      this.accountsList = data;
      console.log(typeof(data), data);
      console.log(data[0], "meow", this.selectedId);

      // for (let i: number = 0; i < data.length; i++){
      //   if (data[i].uid == this.selectedId){
      //     // this.customer = data[i];
      //     this.accountsList.push(data[i]);
      //     console.log('yes we got the data' + this.accountsList);
      //     // break;
      //   }
      // }
    });
  }
  onClick(customer: Customer){
    // this.selectedEmp = emp;
    // this.router.navigate(['/customerdetails', customer.username]);
    // console.log(customer);
  }

  onUpdate(account: Accounts){
    this.accountService.updateAccount(account).subscribe(data => {
      console.log('updated the account successfully, data = ', data);      
    });
    return document.location.reload(true);
  }
  
  onDelete(account: Accounts){
    this.accountService.deleteAccount(account.ano).subscribe(data => {
      console.log('deleted the account with ano successfull');
    });
    return document.location.reload(true);
  }

  addAccount(){
    // let x: number = this.selectedId*1;
    this.accountService.createAccount(this.route.snapshot.paramMap.get('uid'), new Accounts(0, 5000, this.atype, this.selectedId)).subscribe(data => {
      console.log('account created!', data);
    });
    return document.location.reload(true);
  }
}