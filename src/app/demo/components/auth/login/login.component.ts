import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service'; // Import AuthService

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
        this.loginMedico(); // Llama al método para login de médico si isTerapeuta es true
      } else {
        this.loginPaciente(); // Llama al método para login de paciente si isTerapeuta es false
      }
    }
  
    private loginPaciente() {
      this.authService.loginPaciente(this.username, this.password).subscribe({
        next: () => {
          this.handleLoginRedirect(false);
        },
        error: () => {
          console.log('Login failed');
        }
      });
    }
  
    private loginMedico() {
      this.authService.loginMedico(this.username, this.password).subscribe({
        next: () => {
          this.handleLoginRedirect(true);
        },
        error: () => {
          console.log('Login failed');
        }
      });
    }
  
    private handleLoginRedirect(isDoctor: boolean) {
      if (isDoctor) {
        this.router.navigate(['/medico']);
      } else {
        this.router.navigate(['/paciente']);
      }
    }
  }