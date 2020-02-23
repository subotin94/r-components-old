import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RCardComponent } from './card.component';
import { RCardBodyComponent } from './body/card-body.component';
import { RCardFooterComponent } from './footer/card-footer.component';
import { RCardAvatarDirective } from './header/card-avatar.directive';
import { RCardHeaderComponent } from './header/card-header.component';
import { RCardTitleDirective } from './header/card-title.directive';

const R_CARD_COMPONENTS = [
  RCardComponent,
  RCardHeaderComponent,
  RCardAvatarDirective,
  RCardTitleDirective,
  RCardBodyComponent,
  RCardFooterComponent
];

@NgModule({
  declarations: R_CARD_COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: R_CARD_COMPONENTS
})
export class RCardModule { }
