import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { RComponentStatus } from '../../../../core/types';

@Component({
  selector: 'r-tab-active-label',
  template: ``,
  styleUrls: ['./r-tab-active-label.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RTabActiveLabelComponent {
  @Input() status: RComponentStatus = 'info';

  @Input()
  @HostBinding('style.width.px')
  get labelWidth(): number {
    return this._labelWidth;
  }
  set labelWidth(labelWidth: number) {
    this._labelWidth = labelWidth;
  }
  private _labelWidth = 0;
  ngOnInit() {console.log(this.labelWidth)}

  @Input()
  @HostBinding('style.margin-left.px')
  get marginLeft(): number {
    return this._marginLeft;
  }
  set marginLeft(marginLeft: number) {
    this._marginLeft = marginLeft;
  }
  private _marginLeft = 0;

  @HostBinding('class.status-info')
  get info(): boolean {
    return this.status === 'info';
  }

}
