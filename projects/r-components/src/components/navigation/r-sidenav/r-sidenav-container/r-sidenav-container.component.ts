import { Component, ViewChild } from '@angular/core';
import { OverlayRef, Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { SubSink } from 'subsink';

import { RSubscriptionComponent } from '../../../../core/r-subscription-component.interface';

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

  protected ref: OverlayRef;

  constructor(protected readonly overlay: Overlay) { }

  ngOnInit(): void {
    console.log(this.portal);
    _portal = this.portal;
  }

  protected attachToOverlay(): void {
    console.log(this.portal);
    console.log(_portal);
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

  private createPositionStrategy(): GlobalPositionStrategy {
    return new GlobalPositionStrategy().top().left().right().bottom();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
