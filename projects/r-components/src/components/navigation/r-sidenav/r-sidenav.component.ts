import { Component, HostBinding, Input, HostListener, ElementRef, Renderer2, ViewChild, Host, Inject } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';

import { RSidenavMode } from './sidenav';
import { RSubscriptionComponent } from '../../../core/r-subscription-component.interface';
import { CdkPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

/**
 * @todo
 * @important
 * @note
 * @subbre
 * Move overlay to container component and attach r-sidenav to component portal
 */
@Component({
  selector: 'r-sidenav',
  templateUrl: './r-sidenav.component.html',
  styleUrls: ['./r-sidenav.component.scss']
})
export class RSidenavComponent implements RSubscriptionComponent {

  readonly subs = new SubSink();
  openedChange: Subject<boolean> = new Subject();

  /**
   * @bug
   * Cannot pass width as parametter
   * @note
   * Changing `width` to `sidenavWidth` still didnt fix the issue
   */
  @Input() width: number = 256;
  @Input() mode: RSidenavMode = 'push';

  @Input()
  get opened(): boolean {
    return this._opened;
  }
  set opened(opened: boolean) {
    this._opened = opened;
  }
  private _opened: boolean = false;

  private ref: OverlayRef;

  @ViewChild(CdkPortal, { static: false })
  private readonly portal: CdkPortal;

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly hostRef: ElementRef<HTMLElement>,
              private readonly renderer: Renderer2,
              private readonly overlay: Overlay) { }

  ngOnInit(): void {
    this.setWidth();
  }

  private setWidth(): void {
    this.width = this.hostRef.nativeElement.getBoundingClientRect().width;
  }

  toggle(): Promise<void> {
    return this._toggle();
  }

  open(): Promise<void> {
    return this._toggle(true);
  }

  close(): Promise<void> {
    if (this.ref) {
      this.ref.dispose();
    }
    return this._toggle(false);
  }

  private _toggle(opened?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      if (opened === undefined) {
        this.opened = !this.opened;
        this.shouldAttach();
      } else {
        this.opened = opened;
        this.shouldAttach();
      }
      const timeout = setTimeout(() => {
        resolve();
        this.openedChange.next(this.opened);
        clearTimeout(timeout);
      }, 400);
    });
  }

  private shouldAttach() {
    if (this.mode === 'over' && this.opened) {
      this.attachToOverlay();
    }
  }

  private attachToOverlay(): void {
    this.createOverlay();
    // if (!this.ref) {
    //   // this.subscribeOnPositionChange();
    //   // this.createKeyManager();
    //   // this.subscribeOnOverlayKeys();
    // } else {
    //   this.createOverlay();
    // }
    this.ref.attach(this.portal);
  }

  private createOverlay(): void {
    const positionStrategy = this.createPositionStrategy();
    this.ref = this.overlay.create({ positionStrategy, hasBackdrop: true });
    this.subs.add(this.ref.backdropClick().subscribe(() => {
      this.close();
    }));
  }

  private createPositionStrategy() {
    return new GlobalPositionStrategy().top().left().right().bottom();
  }

  @HostBinding('style.margin-left.px')
  get marginLeft(): number {
    return this.opened ? 0 : -this.width;
  }

  @HostBinding('style.visibility')
  get visibility(): string {
    return this.opened ? 'visible' : 'hidden';
  }

  @HostBinding('class.over')
  get over(): boolean {
    return this.mode === 'over';
  }

  @HostListener('window:resize')
  onResize(): void { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
