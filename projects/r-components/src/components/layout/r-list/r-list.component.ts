import { Component } from '@angular/core';

@Component({
  selector: 'r-list',
  template: '<ng-content select="r-list-item"></ng-content>',
  styleUrls: ['./r-list.component.scss']
})
export class RListComponent {}
