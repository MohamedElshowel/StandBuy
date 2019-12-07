import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path :'home',component:HomeComponent},
  {path :'search',component:ProductListComponent},
  {path :'view',component:ProductDetailComponent},
  {	path: '**',	component: HomeComponent}
	
	
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
