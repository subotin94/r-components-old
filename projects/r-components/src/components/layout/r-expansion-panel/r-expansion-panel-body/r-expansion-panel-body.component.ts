import { Component } from '@angular/core';

@Component({
  selector: 'r-expansion-panel-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class RExpansionPanelBodyComponent { }
