import { Component, HostBinding, Input } from '@angular/core';
import { RComponentStatus } from '../../../core/types';

@Component({
  selector: 'r-hint',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./r-hint.component.scss']
})
export class RHintComponent {

  @Input() status: RComponentStatus = 'primary';

  @Input()
  @HostBinding('class.full-width')
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = value;
  }
  private _fullWidth = false;

  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

}
