import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';

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
    password!: string;
    isTerapeuta: boolean = false; // default role is patient

    constructor(public layoutService: LayoutService, private router: Router) { }

    login() {
        if (this.isTerapeuta) {
            this.router.navigate(['/medico']);
        } else {
            this.router.navigate(['/paciente']);
        }
    }
}
