import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RCardComponent } from './r-card.component';
import { RCardHeaderComponent } from './header/r-card-header.component';
import { RCardAvatarDirective } from './header/r-card-avatar.directive';
import { RCardTitleDirective } from './header/r-card-title.directive';
import { RCardBodyComponent } from './body/r-card-body.component';

const R_CARD_COMPONENTS = [
  RCardComponent,
  RCardHeaderComponent,
  RCardAvatarDirective,
  RCardTitleDirective,
  RCardBodyComponent
];

@NgModule({
  declarations: R_CARD_COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: R_CARD_COMPONENTS
})
export class RCardModule { }
