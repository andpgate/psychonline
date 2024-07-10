import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-medico-citas',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextareaModule],
  templateUrl: './medico-citas.component.html',
  styleUrls: ['./medico-citas.component.scss']
})
export class MedicoCitasComponent {
  citas = [
    // Ejemplo de citas, reemplaza con tus datos reales
    { nombrePaciente: 'Juan Pérez', fecha: new Date('2024-07-08T10:00:00'), hora: new Date('2024-07-08T10:00:00'), estado: 'Programada' },
    { nombrePaciente: 'Ana Gómez', fecha: new Date('2024-07-09T14:00:00'), hora: new Date('2024-07-09T14:00:00'), estado: 'Programada' },
    { nombrePaciente: 'Juan Pérez', fecha: new Date('2024-07-08T10:00:00'), hora: new Date('2024-07-08T10:00:00'), estado: 'Programada' },
    { nombrePaciente: 'Ana Gómez', fecha: new Date('2024-07-09T14:00:00'), hora: new Date('2024-07-09T14:00:00'), estado: 'Programada' },
    { nombrePaciente: 'Juan Pérez', fecha: new Date('2024-07-08T10:00:00'), hora: new Date('2024-07-08T10:00:00'), estado: 'Programada' },
    { nombrePaciente: 'Ana Gómez', fecha: new Date('2024-07-09T14:00:00'), hora: new Date('2024-07-09T14:00:00'), estado: 'Programada' }
  ];
  displayHistoriaModal = false;
  historia = '';
  citaSeleccionada: any = null;

  citaRealizada(cita: any): boolean {
    const ahora = new Date();
    const citaFechaHora = new Date(cita.fecha);
    return citaFechaHora < ahora;
  }

  openHistoriaModal(cita: any): void {
    this.citaSeleccionada = cita;
    this.displayHistoriaModal = true;
  }

  closeHistoriaModal(): void {
    this.displayHistoriaModal = false;
    this.historia = '';
  }

  finalizarCita(): void {
    if (this.citaSeleccionada) {
      // Lógica para guardar la historia de la cita
      console.log('Historia guardada para la cita:', this.citaSeleccionada);
      console.log('Historia:', this.historia);

      // Lógica para finalizar la cita
      this.citaSeleccionada.estado = 'Finalizada';
    }

    this.closeHistoriaModal();
  }
}
