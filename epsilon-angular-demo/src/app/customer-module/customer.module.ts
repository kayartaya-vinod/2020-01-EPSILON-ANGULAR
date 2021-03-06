import { NgModule } from '@angular/core';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderTotalPipe } from './pipes/order-total.pipe';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

const routeConfig: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'order-history',
        component: OrderHistoryComponent
    },
    {
        path: 'order-details/:orderId',
        component: OrderDetailsComponent
    },
    {
        path: 'view-profile',
        component: ViewProfileComponent
    },
    {
        path: 'edit-profile',
        component: EditProfileComponent
    }
]

@NgModule({
    declarations: [
        EditProfileComponent,
        LoginComponent,
        OrderDetailsComponent,
        OrderHistoryComponent,
        RegisterComponent,
        ViewProfileComponent,
        OrderTotalPipe,
    ],
    exports: [
        EditProfileComponent,
        LoginComponent,
        OrderDetailsComponent,
        OrderHistoryComponent,
        RegisterComponent,
        ViewProfileComponent,
        OrderTotalPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routeConfig),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                deps: [HttpClient],
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http)
            }
        })
    ],
    providers: []
})
export class CustomerModule {
    constructor(ts: TranslateService) {
        ts.setDefaultLang('en');
    }
}