import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoPacientesComponent } from './medico-pacientes.component';

const routes: Routes = [
  { path: '', component: MedicoPacientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoPacientesRoutingModule { }
