import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Appointment {
  description: string;
}

@Component({
  selector: 'app-medico-gestion-horario',
  templateUrl: './medico-gestion-horario.component.html',
  styleUrls: ['./medico-gestion-horario.component.scss']
})
export class MedicoGestionHorarioComponent implements OnInit {
  weekDays: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  appointments: { [key: string]: Appointment[] } = {
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
    domingo: []
  };
  maxRows: number[] = [];
  weekDates: { [key: string]: Date } = {};

  currentDate: Date = new Date();
  display: boolean = false;
  displayCancel: boolean = false;
  newAppointmentDate: string = '';
  newAppointmentTime: string = '';
  cancelReason: string = '';
  selectedAppointment: Appointment | null = null;

  ngOnInit() {
    this.calculateWeekDates();

    // Ejemplo de citas
    this.appointments = {
      lunes: [{ description: 'Cita 1' }, { description: 'Cita 2' }],
      martes: [{ description: 'Cita 1' }, { description: 'Cita 2' }, { description: 'Cita 3' }, { description: 'Cita 4' }, { description: 'Cita 5' }],
      miercoles: [{ description: 'Cita 1' }, { description: 'Cita 2' }, { description: 'Cita 3' }],
      jueves: [{ description: 'Cita 1' }],
      viernes: [],
      sabado: [{ description: 'Cita 1' }, { description: 'Cita 2' }],
      domingo: [{ description: 'Cita 1' }]
    };

    // Calcular el número máximo de filas necesarias
    this.calculateMaxRows();
  }

  calculateWeekDates() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);

    this.weekDays.forEach((day, index) => {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + index);
      this.weekDates[day] = currentDate;
    });
  }

  getStartOfWeek(date: Date): Date {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    const dayOffset = (dayOfWeek + 6) % 7; // Ajustar para que Lunes sea el primer día
    startOfWeek.setDate(startOfWeek.getDate() - dayOffset);
    return startOfWeek;
  }

  calculateMaxRows() {
    const maxAppointments = Math.max(...Object.values(this.appointments).map(day => day.length));
    this.maxRows = Array(maxAppointments).fill(0).map((x, i) => i);
  }

  prevWeek() {
    this.adjustWeek(-7);
  }

  nextWeek() {
    this.adjustWeek(7);
  }

  adjustWeek(days: number) {
    this.currentDate.setDate(this.currentDate.getDate() + days);
    this.calculateWeekDates();
  }

  showDialog() {
    this.display = true;
  }

  createAppointment() {
    const selectedDate = new Date(this.newAppointmentDate);
    const selectedDay = this.weekDays[selectedDate.getDay() - 1];
    this.appointments[selectedDay].push({ description: `Cita a las ${this.newAppointmentTime}` });
    this.calculateMaxRows();
    this.display = false;
  }

  appointmentMenu(appointment: Appointment): MenuItem[] {
    return [
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => this.confirmDeleteAppointment(appointment)
      },
      {
        label: 'Más Información',
        icon: 'pi pi-info-circle',
        command: () => this.moreInfo(appointment)
      }
    ];
  }

  toggleMenu(event: Event, menu: any) {
    menu.toggle(event);
  }

  confirmDeleteAppointment(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.displayCancel = true;
  }

  deleteAppointment() {
    if (this.cancelReason.trim() === '') {
      alert('Por favor, ingrese el motivo de cancelación.');
      return;
    }

    if (this.selectedAppointment) {
      // Encuentra el día de la cita seleccionada
      const day = this.weekDays.find(day => this.appointments[day].includes(this.selectedAppointment!));
      if (day) {
        // Elimina la cita del día correspondiente
        this.appointments[day] = this.appointments[day].filter(a => a !== this.selectedAppointment);
        this.calculateMaxRows();
      }
      console.log('Eliminar cita', this.selectedAppointment, 'Motivo:', this.cancelReason);
      this.selectedAppointment = null;
      this.cancelReason = '';
      this.displayCancel = false;
    }
  }

  moreInfo(appointment: Appointment) {
    // Lógica para mostrar más información
    console.log('Más información', appointment);
  }

  closeCancelDialog() {
    this.selectedAppointment = null;
    this.cancelReason = '';
    this.displayCancel = false;
  }
}
