import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth/auth.services'; // Import AuthService

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
          transform: scale(1.6);
          margin-right: 1rem;
          color: var(--primary-color) !important;
      }
    `]
  })
  export class LoginComponent {
  
    valCheck: string[] = ['remember'];
    username!: string;
    password!: string;
    isTerapeuta: boolean = false; // default role is patient
  
    constructor(
      public layoutService: LayoutService,
      private router: Router,
      private authService: AuthService // Inyecta AuthService aquí
    ) { }
  
    login() {
      if (this.isTerapeuta) {
        this.authService.loginMedico(this.username, this.password).subscribe({
          next: (response) => {
            // Guarda el token y la id en el localStorage
            localStorage.setItem('token', response.token);
            localStorage.setItem('user_id', response.id.toString());
            this.router.navigate(['/medico']);
          },
          error: (err) => {
            console.error('Login failed', err);
            // Maneja el error de login
          }
        });
      } else {
        this.authService.loginPaciente(this.username, this.password).subscribe({
          next: (response) => {
            // Guarda el token y la id en el localStorage
            localStorage.setItem('token', response.token);
            localStorage.setItem('user_id', response.id.toString());
            this.router.navigate(['/paciente']);
          },
          error: (err) => {
            console.error('Login failed', err);
            // Maneja el error de login
          }
        });
      }
    }
  }