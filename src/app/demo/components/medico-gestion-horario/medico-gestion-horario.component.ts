import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-gestion-horario',
  templateUrl: './medico-gestion-horario.component.html'
})
export class MedicoGestionHorarioComponent implements OnInit {
  weekDays: any[] = [];
  daysOptions: any[];
  selectedDay: any;
  selectedTime: Date;
  description: string;
  displayAddAvailability: boolean = false;

  constructor() {
    this.daysOptions = [
      { name: 'Lunes', code: 'MO' },
      { name: 'Martes', code: 'TU' },
      { name: 'Miércoles', code: 'WE' },
      { name: 'Jueves', code: 'TH' },
      { name: 'Viernes', code: 'FR' },
      { name: 'Sábado', code: 'SA' },
      { name: 'Domingo', code: 'SU' }
    ];
  }

  ngOnInit(): void {
    this.initializeWeekDays();
  }

  initializeWeekDays() {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay();

    const mondayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 1, 9, 0), description: 'Consulta General' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 1, 11, 0), description: 'Revisión' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 1, 14, 0), description: 'Cita de Control' }
    ];

    const tuesdayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 2, 10, 0), description: 'Consulta General' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 2, 13, 0), description: 'Revisión' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 2, 15, 0), description: 'Cita de Control' }
    ];

    const wednesdayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 3, 9, 0), description: 'Consulta General' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 3, 11, 0), description: 'Revisión' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 3, 13, 0), description: 'Cita de Control' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 3, 15, 0), description: 'Seguimiento' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 3, 17, 0), description: 'Consulta Especial' }
    ];

    const thursdayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 4, 12, 0), description: 'Revisión' }
    ];

    const fridayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 5, 9, 0), description: 'Consulta General' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 5, 11, 0), description: 'Revisión' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 5, 13, 0), description: 'Cita de Control' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 5, 15, 0), description: 'Seguimiento' },
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 5, 17, 0), description: 'Consulta Especial' }
    ];

    const saturdayAppointments = [
      { time: new Date(today.getFullYear(), today.getMonth(), startOfWeek + 6, 9, 0), description: 'Consulta General' }
    ];

    const sundayAppointments = []; // No appointments

    const appointmentsData = [
      mondayAppointments,
      tuesdayAppointments,
      wednesdayAppointments,
      thursdayAppointments,
      fridayAppointments,
      saturdayAppointments,
      sundayAppointments
    ];

    this.weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(startOfWeek + i);
      return {
        name: this.daysOptions[i].name,
        date: new Date(date), // Ensure a new Date object
        appointments: appointmentsData[i]
      };
    });
  }

  showAddAvailabilityDialog() {
    this.displayAddAvailability = true;
  }

  onAddAvailability() {
    const selectedDay = this.weekDays.find(day => day.name === this.selectedDay.name);
    if (selectedDay) {
      selectedDay.appointments.push({
        time: this.selectedTime,
        description: this.description
      });
    }
    this.displayAddAvailability = false;

    // Reset form fields
    this.selectedDay = null;
    this.selectedTime = null;
    this.description = '';
  }
}
