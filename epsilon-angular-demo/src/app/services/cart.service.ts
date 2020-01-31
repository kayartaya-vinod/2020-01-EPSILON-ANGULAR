import { Injectable } from '@angular/core';
import { LineItem } from '../model/line-item';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: LineItem[] = [];

  constructor() {
    if (localStorage['cart']) {
      this.cart = JSON.parse(localStorage['cart']);
    }
  }

  get itemCount() {
    return this.cart.length;
  }

  get itemTotal() {
    if(this.cart.length==0) return 0;
    
    return this.cart.map(
      li => li.product.unit_price * li.quantity * (100 - li.product.discount) / 100)
      .reduce((a, b) => a + b);
  }

  persist() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  emptyCart() {
    this.cart = [];
    this.persist();
  }

  addToCart(p: Product) {
    this.cart.push({ product: p, quantity: 1 });
    this.persist();
  }

  incrementQuantity(p: Product) {
    const li = this.cart.find(li => li.product.id === p.id);
    if (li) li.quantity++;
    this.persist();
  }

  decrementQuantity(p: Product) {
    const index = this.cart.findIndex(li => li.product.id === p.id);
    const li = this.cart[index];
    if (li) {
      li.quantity--;
      if (li.quantity === 0) {
        // remove this line item from the cart
        this.cart.splice(index, 1);
      }
    }
    this.persist();
  }

  getQuantity(p: Product): number {
    return this.cart.find(li => li.product.id === p.id).quantity;
  }

  isInCart(p: Product): boolean {
    return this.cart.findIndex(li => li.product.id === p.id) !== -1;
  }
}
