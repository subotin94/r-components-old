import { Component } from '@angular/core';

@Component({
  selector: 'r-list-item',
  template: '<li><ng-content></ng-content></li>',
  styleUrls: ['./r-list-item.component.scss']
})
export class RListItemComponent {}
