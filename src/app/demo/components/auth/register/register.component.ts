import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
    password!: string;
    number!: number;
    email!: string;
    name!: string;
    last!: string;
    user!: string;
    isDoctor: boolean = false; // default role is patient
    titles!: string;
    selectedSpecialty!: string;
    medicalHistory!: string;
    specialties: { label: string, value: string }[] = [
        { label: 'Cardiología', value: 'Cardiología' },
        { label: 'Dermatología', value: 'Dermatología' },
        { label: 'Neurología', value: 'Neurología' },
        { label: 'Pediatría', value: 'Pediatría' },
        // Agrega más especialidades según sea necesario
    ];

    constructor(public layoutService: LayoutService, private router: Router, private messageService: MessageService) { }

    register() {
        if (this.isDoctor) {
            this.messageService.add({severity:'info', summary:'Registro', detail:'Debe esperar a que el administrador verifique sus datos'});
            setTimeout(() => {
                this.router.navigate(['/landing']);
            }, 3000); // Espera 3 segundos antes de redirigir
        } else {
            this.router.navigate(['/paciente']);
        }
    }
}
