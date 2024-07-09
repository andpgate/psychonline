import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoSolicitudesComponent } from './medico-solicitudes.component';

const routes: Routes = [
  { path: '', component: MedicoSolicitudesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoSolicitudesRoutingModule { }
