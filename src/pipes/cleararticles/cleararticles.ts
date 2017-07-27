import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleararticles'
})
export class CleararticlesPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value) {
      return value.replace(
        /<div class="paragraph paragraph--type--text paragraph--view-mode--default">|<div class="clearfix text-formatted field field--name-field-text field--type-text-long field--label-hidden field__item">|<p>/g,
        ''
      );
    }
  }
}
