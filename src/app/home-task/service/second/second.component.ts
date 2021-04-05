import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../../shared/services/my-first-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  name: string;

  constructor(private service: MyFirstServiceService) { }

  ngOnInit(): void {
    this.service.newName$.subscribe(newName => {
      this.name = newName;
    });
  };

  ngOnDestroy(): void {
    this.service.newName$.unsubscribe()
  }
}
