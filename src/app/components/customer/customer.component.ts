import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
  allCustomer: Customer[];
  currentCustomer: Customer = {
    firstName: '',
    id: null,
    lastName: '',
    address: '',
    role: '',
    gender: ''
  };
  showCurrentCustomer = false;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      (allCust) => {
        this.allCustomer = allCust;
      });
  }

  getCurrentCustomer(customer: Customer) {
    this.currentCustomer = customer;
    this.showCurrentCustomer = true;
  }
}
