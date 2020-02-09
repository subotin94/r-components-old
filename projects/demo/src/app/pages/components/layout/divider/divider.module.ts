import { NgModule } from '@angular/core';
import { DividerComponent } from './divider.component';
import { RDividerModule } from 'projects/r-components/src/components/layout/r-divider/r-divider.module';
import { RCardModule } from 'projects/r-components/card';

@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    RDividerModule,
    RCardModule
  ],
  exports: [
    DividerComponent
  ]
})
export class DividerModule { }
