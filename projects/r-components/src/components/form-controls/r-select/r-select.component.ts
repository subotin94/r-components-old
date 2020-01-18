import {
  Component,
  forwardRef,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  ContentChild,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { SubSink } from 'subsink';

import { ROptionComponent } from './r-option/r-option.component';
import { RSelectLabelComponent } from './r-select-label/r-select-label.component';
import { RSubscriptionComponent } from '../../../core/r-subscription-component.interface';
import { SELECT_STYLE } from './select.component.style';

@Component({
  selector: 'r-select',
  templateUrl: './r-select.component.html',
  styleUrls: ['./r-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RSelectComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RSelectComponent<T> implements RSubscriptionComponent, ControlValueAccessor {

  @Input() placeholder: string = '';
  @Output() afterClosed = new EventEmitter();

  readonly subs = new SubSink();
  rSelectAnimation: any;

  @ViewChild('rSelectButton', { read: ElementRef, static: true })
  private readonly button: ElementRef<HTMLButtonElement>;

  @ViewChild(CdkPortal, { static: false })
  private readonly portal: CdkPortal;

  @ContentChild(RSelectLabelComponent, { static: true }) customLabel;

  @ContentChildren(ROptionComponent, { descendants: true, read: ElementRef }) options: QueryList<ElementRef<HTMLElement>>;

  selectionModel: ROptionComponent<T>[] = [];

  selectStyle = SELECT_STYLE;

  private ref: OverlayRef;

  constructor(private readonly cd: ChangeDetectorRef,
              private readonly renderer: Renderer2,
              private readonly overlay: Overlay) {
  }

  ngAfterViewInit(): void {
    this.options.forEach(option => {
      this.button.nativeElement.classList.forEach(name => {
        if (name.toString() !== 'select-button') {
          this.renderer.addClass(option.nativeElement, name.toString());
        }
      });
    });
  }

  show(): void {
    if (this.isHidden) {
      this.attachToOverlay();
      // TODO @Subbre
      // this.setActiveOption();
      this.cd.markForCheck();
    } else {}
  }

  hide(): void {
    if (this.isOpen) {
      this.ref.detach();
      this.cd.markForCheck();
    }
  }

  private attachToOverlay(): void {
    if (!this.ref) {
      this.createOverlay();
      // this.subscribeOnPositionChange();
      // this.createKeyManager();
      // this.subscribeOnOverlayKeys();
    } else {
      this.createOverlay();
    }
    this.ref.attach(this.portal);
  }

  private createOverlay(): void {
    const positionStrategy = this.createPositionStrategy();
    this.ref = this.overlay.create({ positionStrategy, hasBackdrop: true, backdropClass: 'cdk-overlay-transparent-backdrop' });
    this.subs.add(this.ref.backdropClick().subscribe(() => {
      this.hide();
      this.afterClosed.emit({ closed: true });
    }));
  }

  private createPositionStrategy() {
    const clientRect: any = this.button.nativeElement.getBoundingClientRect();
    if (((window.innerHeight - Number(String(clientRect.y).split('.')[0])) - 50) < SELECT_STYLE['max-height.px']) {
      return this.overlay
        .position()
        .connectedTo(this.button, { originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
    } else {
      return this.overlay
        .position()
        .connectedTo(this.button, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
    }
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  @HostBinding('class.open')
  get isOpen(): boolean {
    return this.ref && this.ref.hasAttached();
  }

  get selectionView() {
    if (this.selectionModel.length > 1) {
      return this.selectionModel.map((option: ROptionComponent<T>) => option.content).join(', ');
    }
    return this.selectionModel[0].content;
  }

  /**
   * Returns width of the select button.
   */
  get hostWidth(): number {
    return this.button.nativeElement.getBoundingClientRect().width;
  }

  get isHidden(): boolean {
    return !this.isOpen;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
