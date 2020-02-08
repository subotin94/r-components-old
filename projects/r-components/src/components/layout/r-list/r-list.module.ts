import { NgModule } from '@angular/core';
import { RListComponent } from './r-list.component';
import { RListItemComponent } from './r-list-item/r-list-item.component';

const R_LIST_COMPONENTS = [
  RListComponent,
  RListItemComponent
];

@NgModule({
  declarations: R_LIST_COMPONENTS,
  exports: R_LIST_COMPONENTS
})
export class RListModule { }
