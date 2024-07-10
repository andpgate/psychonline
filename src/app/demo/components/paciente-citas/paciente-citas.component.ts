import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-paciente-citas',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextareaModule],
  templateUrl: './paciente-citas.component.html',
  styleUrls: ['./paciente-citas.component.scss']
})
export class PacienteCitasComponent {
  estados = ['Programadas', 'Solicitadas', 'Finalizadas', 'Canceladas', 'Rechazadas'];
  estadoSeleccionado = 'Programadas';
  motivoCancelacion = '';
  citaSeleccionada: any = null;
  display: boolean = false;

  citas = {
    Programadas: [
      { nombreMedico: 'Dr. Juan Perez', fecha: '2024-07-15', hora: '10:00' },
      { nombreMedico: 'Dr. Maria Gomez', fecha: '2024-07-16', hora: '14:00' }
    ],
    Solicitadas: [
      { nombreMedico: 'Dr. Pedro Lopez', fecha: '2024-07-20', hora: '09:00' }
    ],
    Finalizadas: [
      { nombreMedico: 'Dr. Ana Martinez', fecha: '2024-06-30', hora: '11:00' }
    ],
    Canceladas: [],
    Rechazadas: []
  };

  seleccionarEstado(estado: string) {
    this.estadoSeleccionado = estado;
  }

  cancelarCita(cita: any) {
    this.citaSeleccionada = cita;
    this.display = true;
  }

  confirmarCancelacion() {
    const fechaActual = new Date();
    const fechaCita = new Date(this.citaSeleccionada.fecha);
    const diffTime = Math.abs(fechaCita.getTime() - fechaActual.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 2) {
      // Lógica para cancelar la cita
      console.log('Cita cancelada:', this.citaSeleccionada, 'Motivo:', this.motivoCancelacion);
      this.citas[this.estadoSeleccionado] = this.citas[this.estadoSeleccionado].filter(c => c !== this.citaSeleccionada);
      this.citas.Canceladas.push({ ...this.citaSeleccionada, motivo: this.motivoCancelacion });
      this.display = false;
      this.motivoCancelacion = '';
    } else {
      console.log('No se puede cancelar la cita con menos de 2 días de antelación.');
    }
  }

  puedeCancelar(cita: any): boolean {
    const fechaActual = new Date();
    const fechaCita = new Date(cita.fecha);
    const diffTime = Math.abs(fechaCita.getTime() - fechaActual.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 2;
  }
}
