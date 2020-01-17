import { Directive, HostBinding, Input } from '@angular/core';
import { RComponentSize, RComponentStatus, RComponentShape } from '../../../core/types';

@Directive({
  selector: 'input[r-input], textarea[r-input]'
})
export class RInputDirective {

  @Input() fieldSize: RComponentSize = 'medium';
  @Input() shape: RComponentShape = 'rectangle';

  @Input()
  get status(): RComponentStatus {
    return this._status;
  }
  set status(value: RComponentStatus) {
    this._status = value;
  }
  protected _status: RComponentStatus = 'basic';

  @Input()
  @HostBinding('class.input-full-width')
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = !!value;
  }
  private _fullWidth = false;

  @HostBinding('class.size-small')
  get small() {
    return this.fieldSize === 'small';
  }

  @HostBinding('class.size-medium')
  get medium() {
    return this.fieldSize === 'medium';
  }

  @HostBinding('class.size-large')
  get large() {
    return this.fieldSize === 'large';
  }

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

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.shape-rectangle')
  get rectangle() {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.shape-rounded-pill')
  get semiRound() {
    return this.shape === 'rounded-pill';
  }

}
