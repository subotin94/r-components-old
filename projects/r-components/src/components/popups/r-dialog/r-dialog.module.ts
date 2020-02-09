import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RDialog } from './r-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    RDialog
  ],
  exports: [
    RDialog
  ]
})
/**
 * @todo
 * @subbre
 * Add RialogConfig and pass it to mat dialog config
 */
export class RDialogModule {
  static forRoot?(): ModuleWithProviders<RDialogModule> {
    return {
      ngModule: RDialogModule,
      providers: [RDialog]
    };
  }
}
