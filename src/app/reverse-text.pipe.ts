import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }

}
