import { Component, OnInit, Input } from '@angular/core';
import { CustomerRequest } from 'src/app/classes/customer-request';
import { ActivatedRoute } from '@angular/router';
import { CustomerRequestService } from 'src/app/services/customer-request.service';

@Component({
  selector: 'app-customer-request-details',
  templateUrl: './customer-request-details.component.html',
  styleUrls: ['./customer-request-details.component.css']
})
export class CustomerRequestDetailsComponent implements OnInit {

  @Input() public selectedCustomer: CustomerRequest;


  // public username: String;
  public selected: String;

  constructor(private route: ActivatedRoute, private customerRequestService: CustomerRequestService) {
    this.selectedCustomer = new CustomerRequest(1,"", "", "", "", "", "", "");
    this.selected = '';
    // this.username = '';
  }

  ngOnInit() {
    console.log('data in details!!' + this.selectedCustomer);
  //   this.username = this.route.snapshot.paramMap.get('username');
  //   console.log('' + this.username);
  //   this.customerService.getCustomerRequestList().subscribe(data => {
  //     console.log(typeof(data), data);
  //     for (let i: number = 0; i <= data.length; i++){
  //       if (data[i].username == this.username){
  //         this.customerRequest = data[i];
  //         console.log('yes we got the data' + this.customerRequest);
  //         break;
  //       }
  //     }
  //   }); 
    // while(true){
    //   if(this.selected !== ""){
    //     this.customerRequestService.getCustomerRequestList().subscribe(data => {
    //       console.log(typeof(data), data);
    //       for (let i: number = 0; i <= data.length; i++){
    //         if (data[i].username == this.selected){
    //           this.customerRequest = data[i];
    //           console.log('yes we got the data' + this.customerRequest);
    //           break;
    //         }
    //       }
    //     });      
    //   }
    }
  }


