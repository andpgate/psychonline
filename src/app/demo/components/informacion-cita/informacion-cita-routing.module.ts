import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionCitaComponent } from './informacion-cita.component';

const routes: Routes = [
  { path: '', component: InformacionCitaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionCitaRoutingModule { }
