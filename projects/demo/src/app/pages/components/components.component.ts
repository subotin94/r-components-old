import { Component } from '@angular/core';

@Component({
  selector: 'demo-components',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ComponentsComponent { }
