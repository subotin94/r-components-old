// import { Component, ViewChild } from '@angular/core';
// import { RSidenavComponent } from './r-sidenav.component';
// import { CdkPortal } from '@angular/cdk/portal';

// @Component({
//   selector: 'r-sidenav-container',
//   template: `
//     <div *cdkPortal>
//       <ng-content select="r-sidenav-component"></ng-content>
//       <ng-content></ng-content>
//     </div>
//   `,
//   styles: [`
//     :host {
//       display: flex;
//     }
//   `]
// })
// export class RSidenavContainerComponent {

//   @ViewChild(RSidenavComponent, { static: true })
//   sidenav: RSidenavComponent;

//   @ViewChild(CdkPortal, { static: false })
//   private readonly portal: CdkPortal;

//   private attachToOverlay(): void {
//     if (!this.ref) {
//       this.createOverlay();
//       // this.subscribeOnPositionChange();
//       // this.createKeyManager();
//       // this.subscribeOnOverlayKeys();
//     } else {
//       this.createOverlay();
//     }
//     this.ref.attach(this.portal);
//   }

//   private createOverlay(): void {
//     const positionStrategy = this.createPositionStrategy();
//     this.ref = this.overlay.create({ positionStrategy, hasBackdrop: true });
//     this.subs.add(this.ref.backdropClick().subscribe(() => {
//       this.close();
//     }));
//   }

//   private createPositionStrategy() {
//     return new GlobalPositionStrategy().top().left().right().bottom();
//   }
  

// }
