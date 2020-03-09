import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QueueCustomerComponent } from './queue-customer/queue-customer.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'PAT' } },
  { path: ':customerId', component: HomeComponent, data: { title: 'PAT' } },
  { path: 'QueueCustomer/:productId/:customerType/:customerId', component: QueueCustomerComponent, data: { title: 'PAT' } },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
