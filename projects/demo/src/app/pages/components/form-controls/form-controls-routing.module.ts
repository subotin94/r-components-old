import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: FormControlsComponent,
    children: [
      {
        path: 'input',
        component: InputComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
