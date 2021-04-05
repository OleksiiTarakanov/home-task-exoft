import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../../shared/services/my-first-service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit, OnDestroy {

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
