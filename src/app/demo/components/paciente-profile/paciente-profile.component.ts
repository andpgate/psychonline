import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-profile',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './paciente-profile.component.html',
  styleUrls: ['./paciente-profile.component.scss']
})
export class PacienteProfileComponent implements OnInit {
  profile = {
    firstName: 'Pedro',
    lastName: 'González',
    username: 'p.gonzalez',
    email: 'pedro.gonzalez@example.com',
    phone: '+123456789',
    historiasMedicas: [
      'Historia Médica 1',
      'Historia Médica 2',
      'Historia Médica 3',
      // Añade más historias médicas según sea necesario
    ]
  };

  ngOnInit(): void {
    console.log(this.profile.historiasMedicas); // Verifica que las historias médicas estén definidas
    // Aquí puedes cargar los datos del perfil del paciente desde una API o servicio
  }
}
