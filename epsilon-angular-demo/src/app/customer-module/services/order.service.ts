import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ordersUrl } from 'src/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // for the logged in user
  getOrders(): Observable<Array<Order>> {
    return this.http.get(ordersUrl).map(resp => resp as Order[]);
  }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post(ordersUrl, order).map(resp => resp as Order);
  }
}
