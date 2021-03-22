import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent implements OnInit {

  color: string = '89c843';


  constructor() { }

  ngOnInit(): void { }
}
