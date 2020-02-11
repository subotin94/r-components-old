import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    component: FormControlsComponent,
    children: [
      {
        path: 'input',
        component: InputComponent
      },
      {
        path: 'select',
        component: SelectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
