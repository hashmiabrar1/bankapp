import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from 'src/app/classes/accounts';
import {AccountsService} from 'src/app/services/accounts.service'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  public uid: number;
  public balance: number;
  public arr: Array<Accounts>;
  constructor(private route: ActivatedRoute, private _service: AccountsService) { }

  ngOnInit() {
    this.uid = parseInt(this.route.snapshot.paramMap.get('uid'));
    this._service.getAccountsList(this.uid).subscribe(data=>{
      this.arr=data;
      console.log(this.arr);
    });
  }

}
