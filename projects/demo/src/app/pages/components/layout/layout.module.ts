import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { OverviewModule } from './overview/overview.module';
import { CardModule } from './card/card.module';
import { TabsModule } from './tabs/tabs.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    OverviewModule,
    ButtonModule,
    CardModule,
    TabsModule,
    ExpansionPanelModule
  ]
})
export class LayoutModule { }
