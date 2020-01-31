import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from 'src/app/components/app-root/app-root.component';
import { Routes, RouterModule } from '@angular/router';
import { JavaComponent } from 'src/app/components/java/java.component';
import { AngularComponent } from 'src/app/components/angular/angular.component';
import { CoreJavaComponent } from 'src/app/components/core-java/core-java.component';
import { AdvJavaComponent } from 'src/app/components/adv-java/adv-java.component';
import { AngularJsComponent } from 'src/app/components/angular-js/angular-js.component';
import { Angular8Component } from 'src/app/components/angular8/angular8.component';

const routeConfig: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'java'
    },
    {
        path: 'java',
        component: JavaComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'core-java'
            },
            {
                path: 'core-java',
                component: CoreJavaComponent
            },
            {
                path: 'adv-java',
                component: AdvJavaComponent
            }
        ]
    },
    {
        path: 'angular',
        component: AngularComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'angular-js'
            },
            {
                path: 'angular-js',
                component: AngularJsComponent
            },
            {
                path: 'angular8',
                component: Angular8Component
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppRootComponent,
        JavaComponent,
        AngularComponent,
        CoreJavaComponent,
        AdvJavaComponent,
        AngularJsComponent,
        Angular8Component,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routeConfig)
    ],
    bootstrap: [
        AppRootComponent
    ]
})
export class AppModule { }