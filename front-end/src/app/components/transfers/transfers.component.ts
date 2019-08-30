import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';
import { TransactionsService } from 'src/app/transactions.service';
import { Transactions } from 'src/app/classes/transactions';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  public transactions: Transactions;
  public uid: number;
  public errorMessage: String;
  constructor(private route: ActivatedRoute, public _service:TransactionsService) {
    this.transactions = new Transactions(0,0, 0, 0, 0, 0, "", "");
   }

  ngOnInit() {
    this.uid=parseInt(this.route.snapshot.paramMap.get("uid"));
    console.log(this.uid);
  }
  onSubmit(){
    this._service.transfer(this.transactions).subscribe(data=>{
        this.errorMessage=data.message;
      
    })

  }

}
