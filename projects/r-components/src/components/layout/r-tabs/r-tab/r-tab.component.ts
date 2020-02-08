import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'r-tab',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: [`r-tab.component.scss`]
})
export class RTabComponent {

  @Input() label: string;
  @Input() active: boolean = false;

  @HostBinding('style.display')
  get display(): string {
    return this.active ? 'block' : 'none';
  }

}
