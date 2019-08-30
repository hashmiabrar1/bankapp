import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from 'src/app/classes/customer-request';
import { CustomerRequestService } from 'src/app/services/customer-request.service';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'app-customer-requests-list',
  templateUrl: './customer-requests-list.component.html',
  styleUrls: ['./customer-requests-list.component.css']
})
export class CustomerRequestsListComponent implements OnInit {

  public customerList: Customer[];
  public selectedCustomer: Customer;
  public customer: Customer;
  public message: String = '';

  constructor(private customerService: CustomerServiceService, private router: Router) {
    this.selectedCustomer = new Customer(1, "", "", "", "", "", "", "");
  }

  ngOnInit() {
    this.customerService.getCustomerRequests().subscribe(data => {
      this.customerList = data;
      // this.selectedUsername = '';
      console.log(typeof(data), data);
      console.log(data[0], "meow");
    });
  }

  onClick(customer: Customer){
    this.selectedCustomer = customer;
    // this.selectedEmp = emp;
    // this.router .navigate(['/customerRequestDetails', customerRequest.username]);
    // console.log(customerRequest);
    // this.customerRequestService.getCustomerRequestList().subscribe(data => {
    //   console.log(typeof(data), data);
    //   for (let i: number = 0; i <= data.length; i++){
    //     if (data[i].username == customerRequest.username){
    //       this.selectedCustomer = data[i];
    //       console.log('yes we got the data !!!!!!' + this.customerRequest);
    //       break;
    //     }
    //   }
    // }); 
    // this.selectedUsername = customerRequest.username;
  }

  onAccept(customer: Customer){
    console.log('hi', customer.uid);
    // console.log(customer.uid);
    // this.selectedId = customer.uid;
    // console.log(customer.uid);
    this.customerService.acceptCustomer(customer.uid).subscribe((data) => {
      if (data.status == 'Success'){
        console.log('Successfully Accepted');
        console.log("reroute success?");
      }
    });
    this.router.navigate(['/customerlist']);
    
    return document.location.reload(true);
    // console.log('cmon dude why aren\'t you rerouting!!!');
  }
  
  onReject(customer: Customer){
    console.log('the following customer will be deleted', customer);
    this.customerService.rejectCustomer(customer.uid).subscribe((data) => {
      console.log('printing the response after deleting the object!, data = ', data);
    });
    console.log('deletion completed!, customer rejected!');
    return document.location.reload(true);
  }
}
