import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteProfileComponent } from './paciente-profile.component';

const routes: Routes = [
  { path: '', component: PacienteProfileComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteProfileRoutingModule { }
