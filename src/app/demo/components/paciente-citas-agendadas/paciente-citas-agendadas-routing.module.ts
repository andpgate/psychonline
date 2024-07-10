import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteCitasAgendadasComponent } from './paciente-citas-agendadas.component';

const routes: Routes = [
  { path: '', component: PacienteCitasAgendadasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteCitasAgendadasRoutingModule { }
