import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../_models/customer';
import { Customers } from '../_seedData/customers';

@Component({
  selector: 'app-queue-customer',
  templateUrl: './queue-customer.component.html',
  styleUrls: ['./queue-customer.component.css']
})
export class QueueCustomerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  customerId: number;
  productId: number;
  customerType: number;
  customer: Customer;

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.productId = this.route.snapshot.params['productId'];
    this.customerType = this.route.snapshot.params['customerType'];

    this.customer = Customers[1];
  }

  Submit() {

  }
  Cancel() {
    this.router.navigate(['/']);
  }
}
