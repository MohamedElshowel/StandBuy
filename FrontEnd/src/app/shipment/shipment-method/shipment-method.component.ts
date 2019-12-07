import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-method',
  templateUrl: './shipment-method.component.html',
  styleUrls: ['./shipment-method.component.css']
})
export class ShipmentMethodComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit() {
  }
navigate(){
  this.router.navigate(['./payment-method']);
}

}
