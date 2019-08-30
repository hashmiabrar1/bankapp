import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/customer';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service.service';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  public customerList: Customer[];
  public selectedId: number;

  constructor(private customerService: CustomerServiceService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customerList = data;
      console.log(typeof(data), data);
      console.log(data[0], "meow");
    })
  }
  
  // onClick(customer: Customer){
  //   // this.selectedEmp = emp;
  //   console.log(customer.uid, "customer");
  //   this.router.navigate(['/accountsList', customer.uid]);
  //   console.log(customer, "customer");
  // }
  
  onUpdate(customer: Customer){
    this.customerService.updateCustomer(customer).subscribe((data) => {
      console.log(data);
      console.log('customer log has been successfully updated!');
    });
  }

  onDelete(customer: Customer){
    this.customerService.deleteCustomer(customer).subscribe((data) => {
      console.log(customer.name + 'with uid' + customer.uid + 'has successfully been deleted');
      return document.location.reload(true);
    });
  }

  redirectToAccounts(customer: Customer){
    this.router.navigate(['/accountsList', customer.uid]);
  }
}
