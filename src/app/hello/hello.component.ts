import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  age: string = '29';

  fName: string = "Alex";
  
  sName: string = "Alex"

  constructor() { }

  ngOnInit(): void {
  }

  getFullName(): string {
    // console.log(this.fName + ' ' + this.sName);
    return (this.fName + ' ' + this.sName);
  }

  newName($event){
    console.log($event);
    this.fName = $event.fName;
    this.sName = $event.sName;
    this.age = $event.age;
  }

}

