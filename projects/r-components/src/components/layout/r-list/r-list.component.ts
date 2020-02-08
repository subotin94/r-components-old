import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'r-list',
  template: `
    <r-card [style.box-shadow]="disableShadow ? 'none' : true">
      <r-card-body>
        <ng-content select="r-list-title"></ng-content>
        <ul [style.list-style]="disableListStyle ? 'none' : true">
          <ng-content select="r-list-item"></ng-content>
        </ul>
      </r-card-body>
    </r-card>
  `,
  styleUrls: ['./r-list.component.scss']
})
export class RListComponent {
  @Input() disableShadow: boolean = false;
  @Input() disableListStyle: boolean = false;
}
