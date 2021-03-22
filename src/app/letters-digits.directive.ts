import { Directive, ElementRef, HostListener, Input, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLettersDigits]'
})
export class LettersDigitsDirective {

  constructor(
    private readonly el: ElementRef
  ) { }


  // @HostListener('input', ['$event']) onInputChange(event) {
  //   const initalValue = this.el.nativeElement.value;
  //   this.el.nativeElement.value = initalValue.replace(/[^0-9a-zA-Z]*/g, '');
  //   if (initalValue !== this.el.nativeElement.value) {
  //     event.stopPropagation();
  //   }
  // }

  ngOnInit(){
    this.el.nativeElement.addEventListener('keydown', this.allowSymbols)
  }

  allowSymbols(event){
    if(!event.key.match(/^[a-zA-Z0-9]*$/)){
      event.preventDefault()
    }
  }


}


