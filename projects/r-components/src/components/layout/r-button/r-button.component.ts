import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';
import {
  RComponentSize,
  RComponentStatus,
  RComponentShape,
  RComponentAppearance
} from '../../../core/types';

@Component({
  selector: `
    button[r-button],
    button[r-icon-button]
  `,
  template: `
    <ng-container>
      <r-icon *ngIf="icon" [name]="icon"></r-icon>
    </ng-container>
    <ng-content></ng-content>
`,
  styleUrls: ['./r-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RButtonComponent implements OnInit {

  @Input() size: RComponentSize = 'medium';
  @Input() status: RComponentStatus = 'primary';
  @Input() shape: RComponentShape = 'rectangle';
  @Input() appearance: RComponentAppearance = 'filled';
  icon: string;

  constructor(private readonly renderer: Renderer2,
              private readonly hostElement: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    if (this.isIconButton()) {
      this.icon = this.getIcon();
    }
  }

  getIcon(): string {
    return this.getAttribute('icon');
  }

  private getAttribute(attribute: string): string {
    return this.hostElement.nativeElement.getAttribute(attribute);
  }

  private isIconButton(): boolean {
    return this.hasAttribute('r-icon-button') && this.hasAttribute('icon');
  }

  private hasAttribute(attribute: string): boolean {
    return this.hostElement.nativeElement.hasAttribute(attribute);
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

  @HostBinding('class.shape-rectangle')
  get rectangle() {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.shape-rounded-pill')
  get roundedPill() {
    return this.shape === 'rounded-pill';
  }

  @HostBinding('class.size-small')
  get small() {
    return this.size === 'small';
  }

  @HostBinding('class.size-medium')
  get medium() {
    return this.size === 'medium';
  }

  @HostBinding('class.size-large')
  get large() {
    return this.size === 'large';
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

}
