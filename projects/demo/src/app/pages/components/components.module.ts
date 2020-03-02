import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { LayoutModule } from '../../components/navigation/layout/layout.module';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutModule
  ]
})
export class ComponentsModule { }
