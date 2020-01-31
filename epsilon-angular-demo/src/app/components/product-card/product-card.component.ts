import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'epsln-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // @Input indicates that the parent may supply value
  // For example: <epsln-product-card [product]="p">
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  addToCart(evt): void {
    alert('Adding to cart not implement yet!');
    evt.stopPropagation();
  }

}
