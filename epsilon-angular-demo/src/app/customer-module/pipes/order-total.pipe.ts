import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../model/order';

@Pipe({
  name: 'orderTotal'
})
export class OrderTotalPipe implements PipeTransform {

  transform(value: Order): any {
    if (!value) return 0;
    let { lineItems } = value;

    return lineItems.map(
      li => li.product.unit_price * li.quantity * (100 - li.product.discount) / 100)
      .reduce((a, b) => a + b);
  }

}
