import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBacColor]'
})
export class BacColorDirective {

  @Input() color: string;

  constructor(
    private readonly element: ElementRef
  ) { }

  ngOnChanges() {
    if (this.color.match(/^([0-9A-Fa-f]{3}){1,2}$/)) {
      this.element.nativeElement.style.backgroundColor = `#${this.color}`
    } else {
      this.element.nativeElement.style.backgroundColor = `white`
    }
    console.log(this.color)
  }
}
