import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "replacequotes"
})
export class ReplacequotesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.replace(/&quot;/g, '"');
  }
}
