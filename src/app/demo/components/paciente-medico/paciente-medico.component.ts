import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MedicoService } from 'src/app/demo/service/paciente/paciente-medico.service';

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

  constructor(private router: Router, private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.medicoService.getAllMedicos().subscribe((data: any[]) => {
      this.doctors = data.map(medico => ({
        id: medico.medicoId,
        name: medico.nombreCompleto,
        specialty: medico.especialidades.join(', '), // Asumiendo que las especialidades se muestran como una lista separada por comas
        rating: medico.promedioCalificaciones
      }));
      this.filteredDoctors = this.doctors;
    });
  }

  applyFilters(): void {
    this.filteredDoctors = this.doctors.filter(doctor => {
      return (
        (!this.searchText || doctor.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
        (!this.selectedSpecialty || doctor.specialty.includes(this.selectedSpecialty)) &&
        (!this.selectedRating || doctor.rating === +this.selectedRating)
      );
    });
  }

  viewMoreInfo(doctor: any): void {
    // Guardar la ID del médico en localStorage
    localStorage.setItem('selectedDoctorId', doctor.id);
    // Navegar a la ruta del perfil del médico
    this.router.navigate(['/paciente/medicos/perfil']);
  }

  requestAppointment(doctor: any): void {
    this.selectedDoctor = doctor;
    this.display = true;
  }

  createAppointment(): void {
    if (this.newAppointmentDate && this.newAppointmentTime) {
      const fechaHora = `${this.newAppointmentDate}T${this.newAppointmentTime}:00`;
      const pacienteId = localStorage.getItem('user_id'); // Obtener la ID del paciente desde localStorage
      const medicoId = this.selectedDoctor.id; // Obtener la ID del médico desde el objeto seleccionado

      if (pacienteId && medicoId) {
        this.medicoService.solicitarCita(Number(pacienteId), Number(medicoId), fechaHora).subscribe({
          next: (response) => {
            console.log(response.message);
            alert(response.message);
            this.display = false;
            this.newAppointmentDate = '';
            this.newAppointmentTime = '';
          },
          error: (err) => {
            console.error('Error al solicitar la cita', err);
            alert('Hubo un error al solicitar la cita. Intente nuevamente.');
          }
        });
      } else {
        console.error('No patient or doctor ID found');
        alert('No se encontró la información del paciente o médico. Intente nuevamente.');
      }
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
