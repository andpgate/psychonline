import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoGestionHorarioComponent } from './medico-gestion-horario.component';

const routes: Routes = [
  { path: '', component: MedicoGestionHorarioComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoGestionHorarioRoutingModule { }
