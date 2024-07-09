import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medico-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico-solicitudes.component.html',
  styleUrls: ['./medico-solicitudes.component.scss']
})
export class MedicoSolicitudesComponent {
  solicitudes = [
    { id: 1, persona: 'Juan Perez', fecha: '2024-07-10', hora: '10:00' },
    { id: 2, persona: 'Maria Gomez', fecha: '2024-07-11', hora: '14:00' },
    { id: 1, persona: 'Juan Perez', fecha: '2024-07-10', hora: '10:00' },
    { id: 2, persona: 'Maria Gomez', fecha: '2024-07-11', hora: '14:00' },
    // Más solicitudes aquí...
  ];

  aceptarSolicitud(id: number) {
    console.log('Solicitud aceptada:', id);
    // Lógica para aceptar la solicitud
  }

  rechazarSolicitud(id: number) {
    console.log('Solicitud rechazada:', id);
    // Lógica para rechazar la solicitud
  }
}
