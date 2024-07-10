import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    // Aquí debes llamar al servicio para cargar las citas disponibles
    // Simulamos la carga de citas disponibles
    this.citasDisponibles = [
      { citaId: 1, medico: 'Dr. Juan Pérez', especialidad: 'Cardiología', fecha: new Date(), hora: '10:00' },
      { citaId: 2, medico: 'Dra. María López', especialidad: 'Dermatología', fecha: new Date(), hora: '11:00' }
    ];
  }

  buscarCitas() {
    // Aquí debes llamar al servicio para buscar las citas según los filtros
    // Simulamos la búsqueda de citas
    const medicoFiltro = this.filters.medico.toLowerCase();
    this.citasDisponibles = this.citasDisponibles.filter(cita => {
      return (!medicoFiltro || cita.medico.toLowerCase().includes(medicoFiltro)) &&
             (!this.filters.especialidad || cita.especialidad === this.filters.especialidad) &&
             (!this.filters.fecha || new Date(cita.fecha).toDateString() === new Date(this.filters.fecha).toDateString()) &&
             (!this.filters.hora || cita.hora === this.filters.hora);
    });
  }

  agendarCita(citaId: number) {
    // Aquí debes llamar al servicio para agendar la cita
    // Simulamos el agendamiento de una cita
    alert('Cita agendada exitosamente');
    this.cargarCitas(); // Recargar citas disponibles
  }
}
