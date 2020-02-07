import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { RComponentStatus } from '../../../../core/types';

@Component({
  selector: 'r-tab-active-label',
  template: ``,
  styleUrls: ['./r-tab-active-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RTabActiveLabelComponent {
  @Input() status: RComponentStatus = 'info';

  @Input()
  @HostBinding('style.left.rem')
  get left(): number {
    return this._left;
  }
  set left(left: number) {
    this._left = left;
  }
  private _left = 1;

  @HostBinding('class.status-info')
  get info(): boolean {
    return this.status === 'info';
  }

}
