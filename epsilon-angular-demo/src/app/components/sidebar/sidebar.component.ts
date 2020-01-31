import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/customer-module/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'epsln-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: string[];
  brands: string[];

  constructor(private ps: ProductService,
    public auth: AuthService,
    private router: Router,
    public cs: CartService,
    private ts: TranslateService) { }

  ngOnInit() {
    this.ps.categories.subscribe(data => this.categories = data);
    this.ps.brands.subscribe(data => this.brands = data);
  }

  listByCategory(category) {
    this.router.navigate(['/list'], { queryParams: { category } })
  }

  listByBrand(brand) {
    this.router.navigate(['/list'], { queryParams: { brand } })
  }

  changeLang(lang = 'en') {
    this.ts.use(lang);
  }

}
