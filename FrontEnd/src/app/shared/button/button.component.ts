import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

 @Input() content:string;
 @Input() iconUrl:string;
 @Output() clicked=new   EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
 
  }
 onClicked(){
   this.clicked.emit(true);
 }

}
