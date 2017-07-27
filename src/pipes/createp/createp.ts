import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createp'
})
export class CreatepPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if (value) {
      var p = '<p>';
      var pend = '</p>';
      var re = new RegExp(pend, 'g');
      return value.replace(re, '');
    }
  }
}
