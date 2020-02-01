import { Component, HostBinding, Input, HostListener, ElementRef, ContentChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';

import { RSidenavMode } from './sidenav';
import { RSubscriptionComponent } from '../../../core/r-subscription-component.interface';
import { RSidenavContainerComponent } from './r-sidenav-container/r-sidenav-container.component';

/**
 * @todo
 * @subbre
 * Move overlay to container component and attach r-sidenav to component portal
 */
@Component({
  selector: 'r-sidenav',
  templateUrl: './r-sidenav.component.html',
  styleUrls: ['./r-sidenav.component.scss']
})
export class RSidenavComponent extends RSidenavContainerComponent implements RSubscriptionComponent {

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

  constructor(readonly overlay: Overlay,
              private readonly hostRef: ElementRef<HTMLElement>) {
    super(overlay);
  }

  ngOnInit(): void {
    this.setWidth();
  }

  private setWidth(): void {
    this.width = this.hostRef.nativeElement.getBoundingClientRect().width;
  }

  toggle(): Promise<void> {
    /**
     * @todo
     * @subbre
     * This also has to check overlay reference because
     * this method can also close the drawer
     */
    return this._toggle();
  }

  open(): Promise<void> {
    return this._toggle(true);
  }

  close(): Promise<void> {
    if (super.ref) {
      super.ref.dispose();
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

  private shouldAttach(): void {
    if (this.mode === 'over' && this.opened) {
      super.attachToOverlay();
    }
  }


  @HostBinding('style.margin-top.px')
  get marginTop(): number {
    return 76;
    // console.log(super.sidenavContentRef && super.sidenavContentRef.navbar.fixed)
    // return super.sidenavContentRef && super.sidenavContentRef.navbar.fixed && 76;
  }

  private _initialValue = -this.width;
  @HostBinding('style.margin-left.px')
  get marginLeft(): number {
    // if (this.opened && this._initialValue === -this.width) {
    //   this.isMoving = true;
    // } else if (!this.opened && this._initialValue === 0) {
    //   this.isMoving = true;
    // } else {
    //   this.isMoving = false;
    // }
    // if (this.opened) {

    // }
    return this.opened ? 0 : this._initialValue;
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
