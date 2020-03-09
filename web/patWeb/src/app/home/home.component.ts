import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { CustomerType } from '../_models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.existingCustomerProduct = new Product();
    this.newCustomerProduct = new Product();
  }

  existingCustomerProduct: Product;
  newCustomerProduct: Product;
  customerTypes = CustomerType;
  customerType: CustomerType;
  customerId: number;

  ngOnInit() {
    this.existingCustomerProduct.id = 0;
    this.newCustomerProduct.id = 0;
  }

  SelNewCustomerChanged(event) {
    this.existingCustomerProduct = new Product();
    this.existingCustomerProduct.id = 0;
    this.customerType = this.customerTypes.new;
  }

  SelExistingCustomerChanged(event) {
    this.newCustomerProduct = new Product();
    this.newCustomerProduct.id = 0;
    this.customerType = this.customerTypes.existing;
  }

  QueueCustomer() {
    this.router.navigate(['/QueueCustomer/' + (this.newCustomerProduct.id != 0 ? this.newCustomerProduct.id : this.existingCustomerProduct.id) + '/' + this.customerType + '/' + this.customerId
    ]);
  }
}
