import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacequotes'
})
export class ReplacequotesPipe implements PipeTransform {
  transform(value: string, ...args) {
    console.log(value);
    if (value) {
      return value.replace(/&quot;/g, '"');
    }
  }
}
