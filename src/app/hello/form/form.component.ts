import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arr:any = [];

  @Input()
  newAge:string;

  @Input()
  firstName:string;

  @Input()
  surName:string;

  @Output()
  fNameChange = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    console.log(this.surName, this.firstName,  this.newAge);
    var x = {
      sName: this.surName,
      fName: this.firstName,
      age: this.newAge
    }
    this.fNameChange.emit(x);
    console.log(this.fNameChange)
    this.arr.push(this.firstName)
    console.log(this.arr);
    if (this.arr.length > 5){
      this.arr.shift()
    }
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

}
