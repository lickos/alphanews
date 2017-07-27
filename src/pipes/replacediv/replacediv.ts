import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacediv'
})
export class ReplacedivPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value) {
      var pend = '</div>';
      var re = new RegExp(pend, 'g');
      return value.replace(re, '');
    }
  }
}
