import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router) { }

    logout() {
        // Borra el localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('selectedDoctorId');
        // Redirige al usuario a la página de inicio (landing)
        this.router.navigate(['/landing']);
    }
}
