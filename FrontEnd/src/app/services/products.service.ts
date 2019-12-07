import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/products-vm';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


      baseUrl='http://localhost:51778/' +`api/products`
  constructor(private http:HttpClient) { }
  getProducts(){
   return this.http.get<Product[]>(this.baseUrl);
  }
  getProductById(id){
    return this.http.get<Product[]>(this.baseUrl);
   }
}
