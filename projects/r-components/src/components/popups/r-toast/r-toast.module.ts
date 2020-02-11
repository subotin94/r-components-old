import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { RToastComponent } from './r-toast.component';
import { RToastService, RToastContainerRegistry } from './r-toast.service';
import { RToastContainerComponent } from './r-toast-container.component';

@NgModule({
  declarations: [
    RToastComponent,
    RToastContainerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  entryComponents: [
    RToastComponent,
    RToastContainerComponent
  ]
})
export class RToastModule {
  static forRoot(): ModuleWithProviders<RToastModule> {
    return {
      ngModule: RToastModule,
      providers: [
        RToastService,
        RToastContainerRegistry
      ]
    };
  }
}
