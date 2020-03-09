import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.existingCustomerProduct = new Product();
    this.newCustomerProduct = new Product();
  }

  existingCustomerProduct: Product;
  newCustomerProduct: Product;

  ngOnInit() {
    this.existingCustomerProduct.id = 0;
    this.newCustomerProduct.id = 0;
  }

  SelNewCustomerChanged() {
    this.existingCustomerProduct = new Product();
    this.existingCustomerProduct.id = 0;
    //alert("hello");
  }

  SelExistingCustomerChanged() {
    this.newCustomerProduct = new Product();
    this.newCustomerProduct.id = 0;
    //alert("hello");
  }
}
