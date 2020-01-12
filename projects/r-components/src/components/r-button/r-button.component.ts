import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  RComponentSize,
  RComponentStatus,
  RComponentShape,
  RComponentAppearance
} from '../../core/types';

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

  constructor(private readonly renderer: Renderer2,
              private readonly hostElement: ElementRef<HTMLElement>) {
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

  @Input()
  @HostBinding('class.full-width')
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = value;
  }
  private _fullWidth = false;

  @Input()
  @HostBinding('attr.aria-disabled')
  @HostBinding('class.btn-disabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
  }
  private _disabled = false;

  @HostBinding('class.small')
  get small() {
    return this.size === 'small';
  }

  @HostBinding('class.medium')
  get medium() {
    return this.size === 'medium';
  }

  @HostBinding('class.large')
  get large() {
    return this.size === 'large';
  }

  @HostBinding('class.primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.rectangle')
  get rectangle() {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.rounded')
  get roundedMinimal() {
    return this.shape === 'rounded';
  }

  @HostBinding('class.rounded-pill')
  get roundedPill() {
    return this.shape === 'rounded-pill';
  }

  @HostBinding('class.rounded')
  get rounded() {
    return this.shape === 'rounded';
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

}
