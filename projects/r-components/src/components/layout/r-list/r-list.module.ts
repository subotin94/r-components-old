import { NgModule } from '@angular/core';
import { RListComponent } from './r-list.component';
import { RListItemComponent } from './r-list-item/r-list-item.component';
import { RListTitleComponent } from './r-list-title.component';
import { RCardModule } from '../r-card/card';

const R_LIST_COMPONENTS = [
  RListComponent,
  RListItemComponent,
  RListTitleComponent
];

@NgModule({
  declarations: R_LIST_COMPONENTS,
  imports: [
    RCardModule
  ],
  exports: R_LIST_COMPONENTS
})
export class RListModule { }
