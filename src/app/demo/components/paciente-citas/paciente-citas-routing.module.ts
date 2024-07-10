import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteCitasComponent } from './paciente-citas.component';

const routes: Routes = [
  { path: '', component: PacienteCitasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteCitasRoutingModule { }
