import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { RTabsModule } from '../../../../../../../r-components/src/components/layout/r-tabs/r-tabs.module';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    RTabsModule
  ]
})
export class TabsModule { }
