import { Component } from '@angular/core';

@Component({
  selector: 'demo-components',
  templateUrl: './components.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ComponentsComponent { }
