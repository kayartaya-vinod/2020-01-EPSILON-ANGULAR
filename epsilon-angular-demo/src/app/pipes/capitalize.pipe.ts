import { Pipe, PipeTransform } from '@angular/core';


// usage:
// {{ 'vinod' | capitalize }}

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return '';
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }

}
