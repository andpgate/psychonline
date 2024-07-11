import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesService } from 'src/app/demo/service/medico/medico-solicitudes.service'; // Asegúrate de importar el servicio correctamente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-medico-solicitudes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './medico-solicitudes.component.html',
  styleUrls: ['./medico-solicitudes.component.scss']
})
export class MedicoSolicitudesComponent implements OnInit {
  solicitudes: any[] = [];
  medicoId: number = 1; // Ajusta esto para obtener la ID del médico de la manera correcta

  constructor(private solicitudesService: SolicitudesService) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudesService.getSolicitudes(this.medicoId).subscribe({
      next: (data) => {
        this.solicitudes = data.map(solicitud => ({
          id: solicitud.citaId,
          persona: solicitud.nombreCompletoPaciente,
          fecha: new Date(solicitud.fechaHora[0], solicitud.fechaHora[1] - 1, solicitud.fechaHora[2]),
          hora: `${solicitud.fechaHora[3]}:${solicitud.fechaHora[4]}`
        }));
      },
      error: (err) => {
        console.error('Error al cargar las solicitudes de citas', err);
      }
    });
  }

  aceptarSolicitud(id: number) {
    this.solicitudesService.aceptarSolicitud(id).subscribe({
      next: (response) => {
        alert(response.message);
        this.cargarSolicitudes(); // Recargar solicitudes
      },
      error: (err) => {
        console.error('Error al aceptar la solicitud', err);
        alert('Hubo un error al aceptar la solicitud. Intente nuevamente.');
      }
    });
  }

  rechazarSolicitud(id: number) {
    this.solicitudesService.rechazarSolicitud(id).subscribe({
      next: (response) => {
        alert(response.message);
        this.cargarSolicitudes(); // Recargar solicitudes
      },
      error: (err) => {
        console.error('Error al rechazar la solicitud', err);
        alert('Hubo un error al rechazar la solicitud. Intente nuevamente.');
      }
    });
  }
}
