import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteMedicoComponent } from './paciente-medico.component';

const routes: Routes = [
  { path: '', component: PacienteMedicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteMedicoRoutingModule { }
