import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  public customer: Customer;
  public username: String;
  constructor(private route: ActivatedRoute, private customerService: CustomerServiceService) {
    this.customer = new Customer(0,"", "", "", "", "", "", "");
   }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log('' + this.username);
    this.customerService.getCustomerList().subscribe(data => {
      console.log(typeof(data), data);
      for (let i: number = 0; i <= data.length; i++){
        if (data[i].username == this.username){
          this.customer = data[i];
          console.log('yes we got the data' + this.customer);
          break;
        }
      }
    }); 
  }

  onUpdate(){
    console.log('updated the fields');
  }

  onDelete(){
    console.log('deleted the fields');
  }
}
