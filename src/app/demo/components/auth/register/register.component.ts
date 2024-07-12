import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service'; 
import { Observable } from 'rxjs';
import { Nullable } from 'primeng/ts-helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }
  `],
  providers: [MessageService]
})
export class RegisterComponent {
    username!: string;
    password!: string;
    number!: string;
    email!: string;
    name!: string;
    last!: string;
    imagen!: Nullable;
    isDoctor: boolean = false; // default role is patient
    titles!: string;
    selectedSpecialty!: string;
    medicalHistory!: string;
    specialties: { label: string, value: string }[] = [
        { label: 'Neuropsicología', value: 'Neuropsicología' },
        { label: 'Parejas', value: 'Parejas' },
        { label: 'Infantil', value: 'Infantil' },
        { label: 'Psiquiatra', value: 'Psiquiatra' },
    ];
    
    constructor(public layoutService: LayoutService, private router: Router, private messageService: MessageService, private authService: AuthService) { }
    
    register() {
      if (this.isDoctor) {
        this.registerMedico(); 
      } else {
        this.registerPaciente(); 
      }
    }
  
    private registerPaciente() {
      this.authService.registerPaciente(this.username, this.password, this.email, this.number, this.last, this.name).subscribe({
        next: () => {
          this.handleLoginRedirect(false);
        },
        error: () => {
          console.log('Register failed');
        }
      });
    }
  
    private registerMedico() {
      this.authService.registerMedico(this.username, this.password, this.email, this.number, this.last, this.name, this.titles).subscribe({
        next: () => {
          this.handleLoginRedirect(true);
        },
        error: () => {
          console.log('Register failed');
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