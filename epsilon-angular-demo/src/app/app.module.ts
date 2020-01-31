import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SweetAlertService } from 'ng-sweetalert-2-wrapper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { routeConfig } from './route-config';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { CustomHttpInterceptorService } from './services/custom-http-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductListComponent,
    SidebarComponent,
    ProductDetailsComponent,
    CapitalizePipe,
    AddToCartButtonComponent,
    ViewCartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http)
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    SweetAlertService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
