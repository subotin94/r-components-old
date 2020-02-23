import { Component, ViewChild, ContentChild } from '@angular/core';
import { OverlayRef, Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { SubSink } from 'subsink';

import { RSidenavContentComponent } from '../r-sidenav-content/r-sidenav-content.component';
import { Subject } from 'rxjs';
import { RSubscriptionComponent } from '../../../core/r-subscription-component.interface';

let _portal = null;

@Component({
  selector: 'r-sidenav-container',
  templateUrl: './r-sidenav-container.component.html',
  styleUrls: ['./r-sidenav-container.component.scss']
})
export class RSidenavContainerComponent implements RSubscriptionComponent {

  readonly subs = new SubSink();

  @ViewChild(CdkPortal, { static: true })
  protected portal: CdkPortal;

  @ContentChild(RSidenavContentComponent, { static: true })
  private _sidenavContentRef: RSidenavContentComponent;

  protected ref: OverlayRef;

  constructor(protected readonly overlay: Overlay) { }

  ngOnInit(): void {
    _portal = this.portal;
  }

  protected attachToOverlay(): void {
    this.createOverlay();
    // if (!this.ref) {
    //   // this.subscribeOnPositionChange();
    //   // this.createKeyManager();
    //   // this.subscribeOnOverlayKeys();
    // } else {
    //   this.createOverlay();
    // }
    this.ref.attach(_portal);
  }

  private createOverlay(): void {
    const positionStrategy = this.createPositionStrategy();
    this.ref = this.overlay.create({ positionStrategy, hasBackdrop: true });
    this.subs.add(this.ref.backdropClick().subscribe(() => {
      // this.close();
    }));
  }

  $ref = new Subject();
  ngAfterContentInit() {
    const ref = this.getSidenavContentRef();
    this.$ref.next(ref);
  }

  private createPositionStrategy(): GlobalPositionStrategy {
    return new GlobalPositionStrategy().top().left().right().bottom();
  }

  protected getSidenavContentRef(): RSidenavContentComponent {
    return this._sidenavContentRef;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
