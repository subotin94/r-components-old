import { Component, OnInit, forwardRef, Input, Output, EventEmitter, HostBinding, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RComponentStatus } from '../../../core/types';

@Component({
  selector: 'r-checkbox',
  template: `
    <label class="label">
      <input type="checkbox" class="native-input visually-hidden"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValueAndIndeterminate($event)"
             (blur)="setTouched()"
             (click)="$event.stopPropagation()"
             [indeterminate]="indeterminate">
      <span [class.indeterminate]="indeterminate" [class.checked]="checked" class="custom-checkbox">
        <r-icon *ngIf="indeterminate" icon="remove"></r-icon>
        <r-icon *ngIf="checked && !indeterminate" icon="done"></r-icon>
      </span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  styleUrls: [`./r-checkbox.component.scss`],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RCheckboxComponent),
    multi: true,
  }],
})
export class RCheckboxComponent implements ControlValueAccessor {

  /**
   * Output when checked state is changed by a user
   * @type EventEmitter<boolean>
   */
  @Output() checkedChange = new EventEmitter<boolean>();

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }
  private _checked: boolean = false;

  /**
   * Controls input disabled state
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  private _disabled: boolean = false;

  /**
   * Checkbox status.
   * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`.
   */
  @Input()
  get status(): RComponentStatus {
    return this._status;
  }
  set status(value: RComponentStatus) {
    this._status = value;
  }
  protected _status: RComponentStatus = 'primary';

  /**
   * Controls checkbox indeterminate state
   */
  @Input()
  get indeterminate(): boolean {
    return this._indeterminate;
  }
  set indeterminate(value: boolean) {
    this._indeterminate = value;
  }
  private _indeterminate: boolean = false;

  constructor(private readonly cd: ChangeDetectorRef) { }

  onChange: (args?: any) => void = () => { };
  onTouched: () => void = () => { };


  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    this._checked = val;
    this.cd.detectChanges();
  }

  setDisabledState(val: boolean) {
    this.disabled = val;
  }

  setTouched() {
    this.onTouched();
  }

  updateValueAndIndeterminate(event: Event): void {
    const input = (event.target as HTMLInputElement);
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
    this.onChange(this.checked);
    this.indeterminate = input.indeterminate;
  }

  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
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

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

}
