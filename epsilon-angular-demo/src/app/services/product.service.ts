import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

// for this to work, install rxjs-compat
// npm install rxjs-compat
import 'rxjs/add/operator/map';
import { categoriesUrl, brandsUrl, productsUrl } from 'src/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // a 'get' function is used like a property or variable
  get categories(): Observable<string[]> {
    return this.http.get(categoriesUrl)
      .map(resp => resp as string[]);
  }
  get brands(): Observable<string[]> {
    return this.http.get(brandsUrl)
      .map(resp => resp as string[]);
  }

  // this is a function, and should be used like a function (and not variable)
  getProducts(pageNum: number = 1, category = null, brand = null): Observable<Product[]> {
    let options = {
      params: { _page: pageNum.toString() }
    };
    if (category) {
      options.params['category'] = category;
    }
    if (brand) {
      options.params['brand'] = brand;
    }
    return this.http.get(productsUrl, options).map(resp => resp as Product[]);
  }

  getOneProduct(id: any): Observable<Product> {
    return this.http.get(productsUrl + id).map(resp => resp as Product);
  }
}
