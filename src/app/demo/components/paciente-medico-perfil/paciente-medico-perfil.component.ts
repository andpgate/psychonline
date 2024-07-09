import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-paciente-medico-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, RatingModule, InputTextareaModule, DialogModule, InputTextModule],
  templateUrl: './paciente-medico-perfil.component.html',
  styleUrls: ['./paciente-medico-perfil.component.scss']
})
export class PacienteMedicoPerfilComponent implements OnInit {
  doctor: any;
  newComment: string = '';
  newRating: number = 0;
  comments: any[] = [];
  display: boolean = false;
  newAppointmentDate: string = '';
  newAppointmentTime: string = '';

  ngOnInit(): void {
    // Simula la carga de datos del médico
    this.doctor = {
      name: 'Dr. Juan Pérez',
      email: 'juan.perez@hospital.com',
      titles: ['Médico Cirujano', 'Especialista en Cardiología'],
      specialty: 'Cardiología',
      rating: 4.5,
      comments: [
        { text: 'Excelente doctor, muy atento.', rating: 5, date: new Date() },
        { text: 'Muy buen trato y profesionalismo.', rating: 4, date: new Date() }
      ]
    };
    this.comments = this.doctor.comments;
  }

  requestAppointment(): void {
    this.display = true;
  }

  createAppointment(): void {
    if (this.newAppointmentDate && this.newAppointmentTime) {
      console.log(`Cita creada con el Dr./Dra. ${this.doctor.name} en ${this.newAppointmentDate} a las ${this.newAppointmentTime}`);
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
