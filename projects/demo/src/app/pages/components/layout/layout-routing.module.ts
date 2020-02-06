import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview/overview.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
