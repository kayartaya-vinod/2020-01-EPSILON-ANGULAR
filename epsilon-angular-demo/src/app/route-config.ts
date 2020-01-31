import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

export const routeConfig: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ProductListComponent
    },
    {
        path: 'details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'view-cart',
        component: ViewCartComponent
    },
    {
        path: 'customer',
        loadChildren: './customer-module/customer.module#CustomerModule'
    },
    // the default path mapping must be the last one
    {
        path: '**',
        // component: PageNotFoundComponent
        redirectTo: 'list'
    }
];