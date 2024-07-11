import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/demo/service/paciente/paciente-citas-agendadas.service'; // Asegúrate de importar el servicio correctamente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-paciente-citas-agendadas',
  templateUrl: './paciente-citas-agendadas.component.html',
  styleUrls: ['./paciente-citas-agendadas.component.scss']
})
export class PacienteCitasAgendadasComponent implements OnInit {
  citasDisponibles: any[] = [];
  especialidades: { label: string, value: string }[] = [
    { label: 'Cardiología', value: 'Cardiología' },
    { label: 'Dermatología', value: 'Dermatología' },
    { label: 'Neurología', value: 'Neurología' },
    { label: 'Pediatría', value: 'Pediatría' },
    // Agrega más especialidades según sea necesario
  ];
  filters = {
    medico: '',
    especialidad: '',
    fecha: '',
    hora: ''
  };

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citasService.getCitasAgendadas().subscribe({
      next: (data) => {
        this.citasDisponibles = data.map(cita => ({
          citaId: cita.citaId,
          medico: cita.nombreCompletoMedico,
          especialidad: cita.especialidadesMedico.join(', '),
          fecha: new Date(cita.fechaHora[0], cita.fechaHora[1] - 1, cita.fechaHora[2]),
          hora: `${cita.fechaHora[3]}:${cita.fechaHora[4]}`
        }));
      },
      error: (err) => {
        console.error('Error al cargar las citas agendadas', err);
      }
    });
  }

  buscarCitas() {
    const medicoFiltro = this.filters.medico.toLowerCase();
    this.citasDisponibles = this.citasDisponibles.filter(cita => {
      return (!medicoFiltro || cita.medico.toLowerCase().includes(medicoFiltro)) &&
             (!this.filters.especialidad || cita.especialidad.includes(this.filters.especialidad)) &&
             (!this.filters.fecha || new Date(cita.fecha).toDateString() === new Date(this.filters.fecha).toDateString()) &&
             (!this.filters.hora || cita.hora === this.filters.hora);
    });
  }

  agendarCita(citaId: number) {
    const pacienteId = Number(localStorage.getItem('user_id'));
    if (pacienteId) {
      this.citasService.programarCita(citaId, pacienteId).subscribe({
        next: (response) => {
          alert(response.message);
          this.cargarCitas(); // Recargar citas disponibles
        },
        error: (err) => {
          console.error('Error al programar la cita', err);
          alert('Hubo un error al programar la cita. Intente nuevamente.');
        }
      });
    } else {
      console.error('No patient ID found in local storage');
      alert('No se encontró la información del paciente. Intente nuevamente.');
    }
  }
}