import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  public newName$ = new Subject<string>();

}
