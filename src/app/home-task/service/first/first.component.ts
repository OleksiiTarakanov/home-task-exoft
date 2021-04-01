import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../../shared/services/my-first-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  name: string;

  constructor(private service: MyFirstServiceService) { }

  ngOnInit(): void {
    this.service.newName$.subscribe(newName => {
      this.name = newName
    });
  };
}
