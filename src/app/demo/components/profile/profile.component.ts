import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = {
    firstName: 'Juan',
    lastName: 'Pérez',
    username: 'j.perez',
    email: 'juan.perez@example.com',
    phone: '+123456789',
    imageUrl: 'assets/profile-image.jpg', // Ruta a la imagen del perfil
    specialty: 'Cardiología',
    titles: ['Doctor en Medicina', 'Especialista en Cardiología', 'Máster en Salud Pública'] // Asegúrate de que este array tenga datos
  };

  ngOnInit(): void {
    // Aquí puedes cargar los datos del perfil del médico desde una API o servicio
  }
}
