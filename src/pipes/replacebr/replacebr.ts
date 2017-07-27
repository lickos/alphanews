import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacebr'
})
export class ReplacebrPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value) {
      var pend = '<br />';
      var re = new RegExp(pend, 'g');
      return value.replace(re, '');
    }
  }
}
