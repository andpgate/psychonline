import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from 'src/app/demo/service/paciente/paciente-profile.service'; // Asegúrate de importar el servicio correctamente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-paciente-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Asegúrate de importar CommonModule y HttpClientModule
  templateUrl: './paciente-profile.component.html',
  styleUrls: ['./paciente-profile.component.scss']
})
export class PacienteProfileComponent implements OnInit {
  profile: any = null;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    const pacienteId = Number(localStorage.getItem('user_id')); // Obtén el ID del paciente desde localStorage
    this.pacienteService.getPerfil(pacienteId).subscribe({
      next: (data) => {
        this.profile = {
          nombreCompleto: data.nombreCompleto,
          username: data.username,
          email: data.email,
          telefono: data.telefono,
          historias: data.historias
        };
      },
      error: (err) => {
        console.error('Error al cargar el perfil del paciente', err);
      }
    });
  }
}