import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'epsln-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private ps: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.ps.getOneProduct(params.id).subscribe(data => this.product = data);
      });
  }

}
