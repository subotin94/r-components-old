import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RComponentStatus, RComponentAppearance } from '../../../core/types';

@Component({
  selector: 'r-alert',
  template: `
    <ng-content></ng-content>
    <button *ngIf="closable" type="button" class="close" aria-label="Close" (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
  `,
  styleUrls: ['./r-alert.component.scss']
})
export class RAlertComponent implements OnInit {

  @Input() status: RComponentStatus = 'primary';
  @Input() appearance: RComponentAppearance = 'outline';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  get closable(): boolean {
    return this._closable;
  }
  set closable(value: boolean) {
    this._closable = value;
  }
  private _closable = false;

  /**
   * @todo
   * Destroy component
   */
  onClose() {
    console.log('R alert closed');
  }

  @Input()
  @HostBinding('class.appearance-filled')
  get filled(): boolean {
    return this.appearance === 'filled';
  }
  set filled(value: boolean) {
    if (value) {
      this.appearance = 'filled';
    }
  }

  @Input()
  @HostBinding('class.appearance-outline')
  get outline(): boolean {
    return this.appearance === 'outline';
  }
  set outline(value: boolean) {
    if (value) {
      this.appearance = 'outline';
    }
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

}
