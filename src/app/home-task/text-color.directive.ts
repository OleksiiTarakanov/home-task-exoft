import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Directive, ElementRef, Input } from '@angular/core';
import { reverse } from 'node:dns';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input() color: string;
  @Input() reverseColor: string;


  constructor(
    private readonly el: ElementRef
  ) { }

  ngOnInit() {
    this.reverseColor = this.color.split('').reverse().join('');
    console.log(this.color, this.reverseColor)
  }

  ngOnChanges() {
    let that = this;


    this.el.nativeElement.addEventListener('mouseover', function () {
      if (that.color.match(/^([0-9A-Fa-f]{3}){1,2}$/)) {
        that.el.nativeElement.style.color = `#${that.color}`
      } else {
        that.el.nativeElement.style.color = 'red'
      }
    })

    this.el.nativeElement.addEventListener('mouseout', function () {
      that.el.nativeElement.style.color = 'black'
    })
  }


}
