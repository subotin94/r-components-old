import { NgModule } from '@angular/core';
import { RLogoComponent } from './r-logo.component';

const ICONS_COMPONENTS = [
  RLogoComponent
];

@NgModule({
  declarations: ICONS_COMPONENTS,
  exports: ICONS_COMPONENTS
})
export class IconsModule {}
