import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCitasComponent } from './medico-citas.component';

const routes: Routes = [
  { path: '', component: MedicoCitasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoCitasRoutingModule { }
