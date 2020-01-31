import { OnInit, Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <h1>List of names: </h1>
    <hr>
    <div>
        <p *ngFor="let name of names; index as n">{{ n+1 }} - {{name}}</p>
    </div>
    `
})
export class AppRootComponent implements OnInit {

    names: Array<string>;

    constructor() {
        console.log('AppRootComponent.constructor() called');
    }

    ngOnInit(): void {
        console.log('AppRootComponent.ngOnInit() called');
        this.names = ['Vinod', 'Shyam', 'John', 'Jane'];
    }

}