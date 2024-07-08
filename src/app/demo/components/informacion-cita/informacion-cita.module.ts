import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionCitaComponent } from './informacion-cita.component';
import { InformacionCitaRoutingModule } from './informacion-cita-routing.module';

@NgModule({
  declarations: [InformacionCitaComponent],
  imports: [
    CommonModule,
    InformacionCitaRoutingModule
  ]
})
export class InformacionCitaModule { }
