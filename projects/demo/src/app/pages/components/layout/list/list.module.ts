import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { RListModule } from '../../../../../../../r-components/src/components/layout/r-list/r-list.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RListModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule {}
