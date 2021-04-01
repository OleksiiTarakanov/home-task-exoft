import { Component } from '@angular/core';
import { MyFirstServiceService } from '../../shared/services/my-first-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  value: string = '';
  name: string = 'Alex';

  constructor(private service: MyFirstServiceService) { }

  onSubmit() {
    console.log(this.name);
    this.service.newName$.next(this.value)
  }
}
