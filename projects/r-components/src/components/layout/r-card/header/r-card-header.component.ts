import { Component } from '@angular/core';

@Component({
  selector: 'r-card-header',
  template: `
    <ng-content select="r-card-avatar"></ng-content>
    <div class="r-card-header-text">
      <ng-content select="r-card-title, r-card-subtitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./r-card-header.component.scss']
})
export class RCardHeaderComponent { }
