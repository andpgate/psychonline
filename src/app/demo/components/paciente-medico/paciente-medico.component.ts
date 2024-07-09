import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-paciente-medico',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextModule, TableModule],
  templateUrl: './paciente-medico.component.html',
  styleUrls: ['./paciente-medico.component.scss']
})
export class PacienteMedicoComponent implements OnInit {
  searchText: string = '';
  selectedSpecialty: string = '';
  selectedRating: string = '';
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  display: boolean = false;
  selectedDoctor: any = null;
  newAppointmentDate: string = '';
  newAppointmentTime: string = '';

  specialties: string[] = ['Cardiología', 'Dermatología', 'Neurología', 'Pediatría']; // Ejemplo de especialidades
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Simula la carga de datos de los médicos
    this.doctors = [
      { name: 'Dr. Juan Pérez', specialty: 'Cardiología', rating: 5 },
      { name: 'Dra. Ana García', specialty: 'Dermatología', rating: 4 },
      { name: 'Dr. Carlos Martínez', specialty: 'Neurología', rating: 3 },
      { name: 'Dra. Laura Rodríguez', specialty: 'Pediatría', rating: 5 },
      { name: 'Dr. Juan Pérez', specialty: 'Cardiología', rating: 5 },
      { name: 'Dra. Ana García', specialty: 'Dermatología', rating: 4 },
      { name: 'Dr. Carlos Martínez', specialty: 'Neurología', rating: 3 },
      { name: 'Dra. Laura Rodríguez', specialty: 'Pediatría', rating: 5 },
      // Más médicos...
    ];
    this.filteredDoctors = this.doctors;
  }

  applyFilters(): void {
    this.filteredDoctors = this.doctors.filter(doctor => {
      return (
        (!this.searchText || doctor.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
        (!this.selectedSpecialty || doctor.specialty === this.selectedSpecialty) &&
        (!this.selectedRating || doctor.rating === +this.selectedRating)
      );
    });
  }

  viewMoreInfo(doctor: any): void {
    // Navegar a la ruta del perfil del médico
    this.router.navigate(['/paciente/medicos/perfil']);
  }

  requestAppointment(doctor: any): void {
    this.selectedDoctor = doctor;
    this.display = true;
  }

  createAppointment(): void {
    if (this.newAppointmentDate && this.newAppointmentTime) {
      console.log(`Cita creada con el Dr./Dra. ${this.selectedDoctor.name} en ${this.newAppointmentDate} a las ${this.newAppointmentTime}`);
      // Aquí podrías añadir la lógica para enviar los datos de la cita a un servidor, etc.
      this.display = false;
      this.newAppointmentDate = '';
      this.newAppointmentTime = '';
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  closeDialog(): void {
    this.display = false;
    this.newAppointmentDate = '';
    this.newAppointmentTime = '';
  }
}
