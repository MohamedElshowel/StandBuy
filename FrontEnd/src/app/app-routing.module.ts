import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PaymentMethodComponent } from './shipment/payment-method/payment-method.component';
import { ShipmentMethodComponent } from './shipment/shipment-method/shipment-method.component';
import { UserDetailsComponent } from './shipment/user-details/user-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path :'home',component:HomeComponent},
  {path :'search',component:ProductListComponent},
  {path :'view',component:ProductDetailComponent},
  {path :'payment-method',component:PaymentMethodComponent},
  {path :'shipment-method',component:ShipmentMethodComponent},
  {path :'user-details',component:UserDetailsComponent},
  {	path: '**',	component: HomeComponent}
	
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
