import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'epsln-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {

  @Input()
  product: Product;

  // helps notifying the parent by emitting data
  @Output()
  cartEmpty: EventEmitter<any> = new EventEmitter();

  constructor(private cs: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cs.addToCart(this.product);
  }

  decrement() {
    this.cs.decrementQuantity(this.product);
    if(this.cs.itemCount===0) {
      this.cartEmpty.emit();
    }
  }

  increment() {
    this.cs.incrementQuantity(this.product);
  }

  get quantity() {
    return this.cs.getQuantity(this.product);
  }

  get isInCart() {
    return this.cs.isInCart(this.product);
  }

}
