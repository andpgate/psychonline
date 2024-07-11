import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PacienteCitasService } from 'src/app/demo/service/paciente/paciente-citas.service';

@Component({
  selector: 'app-paciente-citas',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextareaModule],
  templateUrl: './paciente-citas.component.html',
  styleUrls: ['./paciente-citas.component.scss']
})
export class PacienteCitasComponent implements OnInit {
  estados = ['Programada', 'Solicitada', 'Finalizada', 'Cancelada', 'Rechazada'];
  estadoSeleccionado = 'Programada';
  motivoCancelacion = '';
  citaSeleccionada: any = null;
  display: boolean = false;
  citas: any = {
    Programada: [],
    Solicitada: [],
    Finalizada: [],
    Cancelada: [],
    Rechazada: []
  };

  constructor(private pacienteCitasService: PacienteCitasService) {}

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('user_id') || '0', 10);
    this.pacienteCitasService.getCitas(userId).subscribe(citas => {
      citas.forEach(cita => {
        if (cita.estado in this.citas) {
          this.citas[cita.estado].push({
            citaId: cita.citaId,
            nombreMedico: cita.nombreCompletoMedico,
            fecha: `${cita.fechaHora[0]}-${cita.fechaHora[1]}-${cita.fechaHora[2]}`,
            hora: `${cita.fechaHora[3]}:${cita.fechaHora[4]}`
          });
        }
      });
    });
  }

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
      this.pacienteCitasService.cancelarCita(this.citaSeleccionada.citaId).subscribe({
        next: (response) => {
          console.log('Cita cancelada:', this.citaSeleccionada);
          console.log('Respuesta del servidor:', response.message);
          this.citas[this.estadoSeleccionado] = this.citas[this.estadoSeleccionado].filter(c => c !== this.citaSeleccionada);
          this.citas.Cancelada.push({ ...this.citaSeleccionada });
          this.display = false;
        },
        error: (err) => {
          console.error('Error al cancelar la cita', err);
          // Maneja el error de cancelación
        }
      });
    } else {
      console.log('No se puede cancelar la cita con menos de 2 días de antelación.');
    }
  }  
}
