import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-medico-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico-pacientes.component.html',
  styleUrls: ['./medico-pacientes.component.scss']
})
export class MedicoPacientesComponent {
  pacientes = [
    { nombre: 'Juan Perez', email: 'juan.perez@example.com', telefono: '123-456-7890' },
    { nombre: 'Maria Gomez', email: 'maria.gomez@example.com', telefono: '098-765-4321' },
    // Más pacientes aquí...
  ];

  constructor(private router: Router) {}

  verMasInformacion(paciente: any) {
    console.log('Más información de:', paciente);
    this.router.navigate(['/medico/pacientes/informacion'], { queryParams: { nombre: paciente.nombre, email: paciente.email, telefono: paciente.telefono } });
  }
}
