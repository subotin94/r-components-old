import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateComponent } from './pages/donate/donate.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(mod => mod.LandingModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/components/components.module').then(mod => mod.ComponentsModule)
  },
  {
    path: 'theme',
    loadChildren: () => import('./pages/theme/theme.module').then(mod => mod.ThemeModule)
  },
  {
    path: 'donate',
    component: DonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
