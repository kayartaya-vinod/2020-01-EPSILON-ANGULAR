import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/customer-module/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/customer-module/model/order';
import { AuthService } from 'src/app/customer-module/services/auth.service';

@Component({
  selector: 'epsln-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderService: OrderService,
    public auth: AuthService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
