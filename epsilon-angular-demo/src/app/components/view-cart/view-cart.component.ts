import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { OrderService } from 'src/app/customer-module/services/order.service';
import { Order } from 'src/app/customer-module/model/order';
import { SweetAlertService } from 'ng-sweetalert-2-wrapper';

@Component({
  selector: 'epsln-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(public cs: CartService,
    private router: Router,
    private auth: AuthService,
    private orderService: OrderService,
    private swal: SweetAlertService) {
    this.redirectToHome();
  }

  ngOnInit() {
  }

  redirectToHome() {
    if (this.cs.itemCount == 0) {
      this.router.navigate(['/']);
    }
  }

  placeOrder() {
    // check if the user has logged in
    if (this.auth.isAuthenticated) {
      // if yes, place the order
      let order = new Order();
      order.lineItems = [...this.cs.cart];
      this.orderService.placeOrder(order)
        .subscribe(
          resp => {
            console.log(resp);
            this.cs.emptyCart();
            // typically redirect the user to a order placement feedback page
            // here, we shall redirect to homepage
            this.router.navigate(['/']);
          },
          console.error
        );
    }
    else {
      // if no, redirect to login page
      //        and after successful login, redirect the user back here
      this.router.navigate(['/login'],
        { queryParams: { redirect: '/view-cart' } })
    }
  }

  async emptyCart() {
    let { value } = await this.swal.confirm({ title: 'Are you sure?' });
    if (value === true) {
      this.cs.emptyCart();
      this.redirectToHome();
    }
  }
}
