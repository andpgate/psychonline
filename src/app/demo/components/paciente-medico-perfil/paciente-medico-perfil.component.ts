import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MedicoService } from 'src/app/demo/service/paciente/paciente-medico.service';

@Component({
  selector: 'app-paciente-medico-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, RatingModule, InputTextareaModule, DialogModule, InputTextModule],
  templateUrl: './paciente-medico-perfil.component.html',
  styleUrls: ['./paciente-medico-perfil.component.scss']
})
export class PacienteMedicoPerfilComponent implements OnInit {
  doctor: any = null;
  newComment: string = '';
  newRating: number = 0;
  comments: any[] = [];
  display: boolean = false;
  newAppointmentDate: string = '';
  newAppointmentTime: string = '';

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    const medicoId = localStorage.getItem('selectedDoctorId');
    if (medicoId) {
      this.medicoService.getMedicoById(Number(medicoId)).subscribe((data: any) => {
        this.doctor = {
          id: data.medicoId,
          name: data.nombreCompleto,
          email: data.email,
          specialty: data.especialidades.join(', '),
          titles: data.titulos ? data.titulos.split(', ') : [],
          rating: data.promedioCalificaciones,
          comments: data.comentarios.map((comentario: any) => ({
            text: comentario.descripcion,
            rating: comentario.calificacion,
            date: new Date() // Puedes ajustar esto si necesitas formatear la fecha adecuadamente
          }))
        };
        this.comments = this.doctor.comments;
      });
    } else {
      console.error('No doctor ID found in local storage');
    }
  }

  requestAppointment(): void {
    this.display = true;
  }

  createAppointment(): void {
    if (this.newAppointmentDate && this.newAppointmentTime) {
      const fechaHora = `${this.newAppointmentDate}T${this.newAppointmentTime}:00`;
      const pacienteId = localStorage.getItem('user_id'); // Obtener la ID del paciente desde localStorage
      const medicoId = localStorage.getItem('selectedDoctorId'); // Obtener la ID del médico desde localStorage

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
        console.error('No patient or doctor ID found in local storage');
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

  addComment(): void {
    if (this.newComment && this.newRating) {
      this.comments.push({
        text: this.newComment,
        rating: this.newRating,
        date: new Date()
      });
      this.newComment = '';
      this.newRating = 0;
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}