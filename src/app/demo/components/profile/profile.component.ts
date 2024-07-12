import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoService } from 'src/app/demo/service/medico/medico-profile.service'; // Asegúrate de importar el servicio correctamente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Asegúrate de importar CommonModule y HttpClientModule
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any = null;

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    const medicoId = 1; // Cambia esto por la forma en que obtienes la ID del médico
    this.medicoService.getPerfilMedico(medicoId).subscribe({
      next: (data) => {
        this.profile = {
          nombreCompleto: data.nombreCompleto,
          username: data.username,
          email: data.email,
          telefono: data.telefono,
          especialidades: data.especialidades.join(', '), // Asumiendo que las especialidades se muestran como una lista separada por comas
          titulos: data.titulos ? data.titulos.split(', ') : []
        };
      },
      error: (err) => {
        console.error('Error al cargar el perfil del médico', err);
      }
    });
  }
}
