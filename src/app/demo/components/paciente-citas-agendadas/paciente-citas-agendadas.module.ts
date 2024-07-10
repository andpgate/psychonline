import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteCitasAgendadasRoutingModule } from './paciente-citas-agendadas-routing.module';
import { PacienteCitasAgendadasComponent } from './paciente-citas-agendadas.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PacienteCitasAgendadasComponent],
  imports: [
    CommonModule,
    PacienteCitasAgendadasRoutingModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule
  ]
})
export class PacienteCitasAgendadasModule { }
