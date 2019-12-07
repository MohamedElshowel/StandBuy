
 export interface Product
 {
     Id: number;
     Name: string;
     Price: number;
     Image: string;
     Category: Category;

 }



 export interface Category
 {
     Id: number;
     Name: string;
     Products:Product[] ;
 }