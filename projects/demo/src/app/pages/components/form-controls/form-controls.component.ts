import { Component } from '@angular/core';

@Component({
  selector: 'demo-form-controls',
  template: `<router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FormControlsComponent { }
