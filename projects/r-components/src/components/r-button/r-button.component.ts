import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { RComponentSize, RComponentStatus, RComponentShape, RComponentAppearance } from '../../core/types';

@Component({
  selector: `
    a[r-button],
    button[r-button],
    input[type="button"][r-button],
    input[type="submit"][r-button]
  `,
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./r-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RButtonComponent {

  @Input() size: RComponentSize = 'medium';
  @Input() status: RComponentStatus = 'primary';
  @Input() shape: RComponentShape = 'rectangle';
  @Input() appearance: RComponentAppearance = 'filled';

  constructor() { }

  @Input()
  @HostBinding('class.full-width')
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = value;
  }
  private _fullWidth = false;

}
