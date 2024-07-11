import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteCitasRoutingModule } from './paciente-citas-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule
import { PacienteCitasComponent } from './paciente-citas.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PacienteCitasRoutingModule,
    HttpClientModule // Asegúrate de importar HttpClientModule
  ]
})
export class PacienteCitasModule { }
