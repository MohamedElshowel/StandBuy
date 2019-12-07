import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/Models/products-vm';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductsService) {
   this.productService.getProducts().subscribe(e=>
    {
      this.products=e;
      console.log(e);
    });
   }

  ngOnInit() {
  }

}
