import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/transactions.service';
import { Transactions } from 'src/app/classes/transactions';
import { Data} from 'src/app/classes/data';
import * as moment from 'moment';
@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  public uid: number;
  public ano: number;
  public tr: Array<Transactions>;
  public message: String;
  public data: Data;
  constructor(private route:ActivatedRoute, public _service:TransactionsService) {
    this.data=new Data("2019-08-20",  "2019-08-28");
   }

  ngOnInit() {
    this.uid=parseInt(this.route.snapshot.paramMap.get("uid"));
  }

  onSubmit(val){
    this.ano=val.fromacc;
    //console.log(this.id);
    //console.log(val);
    //alert(val.fromacc);
    this._service.statement(this.ano).subscribe(data=>{
      if(data.status=="error"){
        this.message="No account exists with Number: "+this.ano;
        this.tr=null;
      }
      else{
      this.tr=data;
      this.message="Last 10 Transactions are below:";
      }
    })
  } 
  onSubmitDate(val){
    //console.log(this.id);
    //console.log(val);
    //alert(val.fromacc);
   // console.log(val.datefrom);
   this.ano=val.fromacc;
    const formattedDate = moment(val.datefrom).format("YYYY-MM-DD");
    const formattedDate2 = moment(val.dateto).format("YYYY-MM-DD");
   // console.log(formattedDate);
    this.data.fromdate=formattedDate;
    this.data.todate=formattedDate2;
    console.log(this.data.fromdate);
    console.log(formattedDate2);
    this._service.statementDate(this.ano, this.data).subscribe(datas=>{
      if(datas.status=="error"){
        this.message="No account exists with Number: "+this.ano;
        this.tr=null;
      }
      else{
      this.tr=datas;

      this.message="Last 10 Transactions are below:";
      }
    })
  } 

  

}
