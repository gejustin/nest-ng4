import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'home',
    template: `<div>Hello {{name}}!</div>`,
})
export class HomeComponent {

    constructor(@Inject(DOCUMENT) private document: any) {
    }
    public name: string = 'World!';
}
