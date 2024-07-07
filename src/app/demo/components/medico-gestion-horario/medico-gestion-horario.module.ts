import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicoGestionHorarioRoutingModule } from './medico-gestion-horario-routing.module';
import { MedicoGestionHorarioComponent } from './medico-gestion-horario.component';

// Importar módulos de PrimeNG
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table'; // Importar TableModule para la tabla

@NgModule({
  declarations: [MedicoGestionHorarioComponent],
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de importar FormsModule
    MedicoGestionHorarioRoutingModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    TableModule // Asegúrate de importar TableModule
  ]
})
export class MedicoGestionHorarioModule { }
