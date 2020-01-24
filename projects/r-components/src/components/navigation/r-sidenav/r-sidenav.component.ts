/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  ViewEncapsulation,
  QueryList,
  ElementRef,
  NgZone,
} from '@angular/core';
import {RDrawer, RDrawerContainer, RDrawerContent, R_DRAWER_CONTAINER} from './drawer';
import {rDrawerAnimations} from './drawer-animations';
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import {ScrollDispatcher} from '@angular/cdk/scrolling';


@Component({
  selector: 'r-sidenav-content',
  template: '<ng-content></ng-content>',
  host: {
    'class': 'r-drawer-content r-sidenav-content',
    '[style.margin-left.px]': '_container._contentMargins.left',
    '[style.margin-right.px]': '_container._contentMargins.right',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RSidenavContent extends RDrawerContent {
  constructor(
      changeDetectorRef: ChangeDetectorRef,
      @Inject(forwardRef(() => RSidenavContainer)) container: RSidenavContainer,
      elementRef: ElementRef<HTMLElement>,
      scrollDispatcher: ScrollDispatcher,
      ngZone: NgZone) {
    super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
  }
}


@Component({
  selector: 'r-sidenav',
  exportAs: 'matSidenav',
  templateUrl: 'drawer.html',
  animations: [matDrawerAnimations.transformDrawer],
  host: {
    'class': 'mat-drawer mat-sidenav',
    'tabIndex': '-1',
    // must prevent the browser from aligning text based on value
    '[attr.align]': 'null',
    '[class.mat-drawer-end]': 'position === "end"',
    '[class.mat-drawer-over]': 'mode === "over"',
    '[class.mat-drawer-push]': 'mode === "push"',
    '[class.mat-drawer-side]': 'mode === "side"',
    '[class.mat-drawer-opened]': 'opened',
    '[class.mat-sidenav-fixed]': 'fixedInViewport',
    '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
    '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RSidenav extends RDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  @Input()
  get fixedInViewport(): boolean { return this._fixedInViewport; }
  set fixedInViewport(value) { this._fixedInViewport = coerceBooleanProperty(value); }
  private _fixedInViewport = false;

  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  @Input()
  get fixedTopGap(): number { return this._fixedTopGap; }
  set fixedTopGap(value) { this._fixedTopGap = coerceNumberProperty(value); }
  private _fixedTopGap = 0;

  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  @Input()
  get fixedBottomGap(): number { return this._fixedBottomGap; }
  set fixedBottomGap(value) { this._fixedBottomGap = coerceNumberProperty(value); }
  private _fixedBottomGap = 0;

  static ngAcceptInputType_fixedInViewport;
  static ngAcceptInputType_fixedTopGap;
  static ngAcceptInputType_fixedBottomGap;
  static ngAcceptInputType_disableClose;
  static ngAcceptInputType_autoFocus;
  static ngAcceptInputType_opened;
}

@Component({
  selector: 'r-sidenav-container',
  exportAs: 'matSidenavContainer',
  templateUrl: 'sidenav-container.html',
  styleUrls: ['drawer.css'],
  host: {
    'class': 'r-drawer-container r-sidenav-container',
    '[class.r-drawer-container-explicit-backdrop]': '_backdropOverride',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: RSidenavContainer
  }]

})
export class RSidenavContainer extends RDrawerContainer {
  @ContentChildren(RSidenav, {
    // We need to use `descendants: true`, because Ivy will no longer match
    // indirect descendants if it's left as false.
    descendants: true
  })
  _allDrawers: QueryList<RSidenav>;

  @ContentChild(RSidenavContent, {static: false}) _content: RSidenavContent;

  static ngAcceptInputType_autosize;
  static ngAcceptInputType_hasBackdrop;
}
