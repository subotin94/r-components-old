import { Component } from '@angular/core';

@Component({
  selector: 'r-list-title',
  template: `<h4><ng-content></ng-content></h4>`,
  styles: [`
    :host {
      display: block;
      padding-left: 20px;
    }
  `]
})
export class RListTitleComponent { }
