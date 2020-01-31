import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRootComponent } from './ex02';

@Component({
    selector: 'app-hello-world',
    template: `<h1>{{ message }}</h1>
    <hr>
    <p>Powered by Angular</p>
    <h3>Author information: </h3>
    <app-author-info></app-author-info>
    `
})
class HelloWorldComponent {
    message: string;

    constructor() {
        this.message = 'Hello, Angular World!'
    }
}

///-----------------------------------------------------------------

@Component({
    selector: 'app-author-info',
    template: `
    <p>Name: Vinod KK<p>
    <p>Email: vinod@vinod.co</p>
    <p>Mobile: 9731424784</p>
    `
})
class AuthorInfoComponent {}

///-----------------------------------------------------------------
@NgModule({
    declarations: [
        // all components, directives, pipes will be included here
        HelloWorldComponent,
        AuthorInfoComponent,
        AppRootComponent
    ],
    imports: [
        // include other modules that your module depends on
        BrowserModule, // take care of DOM manipulation
    ],
    providers: [
        // include your services here (optional, since Angular 7)
    ],
    exports: [
        // list of your components, pipes and directives that 
        // other modules may use
    ],
    bootstrap: [
        // list of components that must be added to index.html
        HelloWorldComponent,
        AppRootComponent
    ]
})
class MyFirstNgModule { }

let angular = platformBrowserDynamic();
angular.bootstrapModule(MyFirstNgModule);