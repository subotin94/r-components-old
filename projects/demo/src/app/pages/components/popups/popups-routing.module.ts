import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsComponent } from './popups.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  {
    path: '',
    component: PopupsComponent,
    children: [
      {
        path: 'toast',
        component: ToastComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
