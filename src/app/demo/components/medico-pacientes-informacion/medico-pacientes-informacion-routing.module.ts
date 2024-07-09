import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoPacientesInformacionComponent } from './medico-pacientes-informacion.component';

const routes: Routes = [
  { path: '', component: MedicoPacientesInformacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoPacientesInformacionRoutingModule { }
