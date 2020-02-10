import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
      },
      {
        path: 'popups',
        loadChildren: () => import('./popups/popups.module').then(mod => mod.PopupsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
