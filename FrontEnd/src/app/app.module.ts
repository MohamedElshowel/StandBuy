import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShipmentMethodComponent } from './shipment/shipment-method/shipment-method.component';
import { ButtonComponent } from './shared/button/button.component';
import { PaymentMethodComponent } from './shipment/payment-method/payment-method.component';
import { UserDetailsComponent } from './shipment/user-details/user-details.component';
import { ResultSuccessComponent } from './shipment/result-success/result-success.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShipmentMethodComponent,
    ButtonComponent,
    PaymentMethodComponent,
    UserDetailsComponent,
    ResultSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    
    
  ],
  providers: [ProductsService],


  bootstrap: [AppComponent]
})
export class AppModule { }
