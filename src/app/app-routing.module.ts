import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './demo/components/auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            {
                path: '', component: AppLayoutComponent,
                children: [     
                    { path: 'medico/profile', loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule),canActivate: [authGuard] },
                    { path: 'medico', loadChildren: () => import('./demo/components/medico/medico.module').then(m => m.MedicoModule),canActivate: [authGuard] },
                    { path: 'medico/horario', loadChildren: () => import('./demo/components/medico-gestion-horario/medico-gestion-horario.module').then(m => m.MedicoGestionHorarioModule),canActivate: [authGuard]},
                    { path: 'medico/cita/informacion', loadChildren: () => import('./demo/components/informacion-cita/informacion-cita.module').then(m => m.InformacionCitaModule),canActivate: [authGuard] },
                    { path: 'paciente', loadChildren: () => import('./demo/components/paciente/paciente.module').then(m => m.PacienteModule),canActivate: [authGuard] },
                    { path: 'paciente/medicos', loadChildren: () => import('./demo/components/paciente-medico/paciente-medico.module').then(m => m.PacienteMedicoModule),canActivate: [authGuard] },
                    { path: 'paciente/medicos/perfil', loadChildren: () => import('./demo/components/paciente-medico-perfil/paciente-medico-perfil.module').then(m => m.PacienteMedicoPerfilModule),canActivate: [authGuard] },
                    { path: 'medico/citas/solicitudes', loadChildren: () => import('./demo/components/medico-solicitudes/medico-solicitudes.module').then(m => m.MedicoSolicitudesModule),canActivate: [authGuard] },
                    { path: 'medico/pacientes', loadChildren: () => import('./demo/components/medico-pacientes/medico-pacientes.module').then(m => m.MedicoPacientesModule),canActivate: [authGuard] },
                    { path: 'medico/pacientes/informacion', loadChildren: () => import('./demo/components/medico-pacientes-informacion/medico-pacientes-informacion.module').then(m => m.MedicoPacientesInformacionModule),canActivate: [authGuard] },
                    { path: 'paciente/citas', loadChildren: () => import('./demo/components/paciente-citas/paciente-citas.module').then(m => m.PacienteCitasModule),canActivate: [authGuard] },
                    { path: 'medico/citas', loadChildren: () => import('./demo/components/medico-citas/medico-citas.module').then(m => m.MedicoCitasModule),canActivate: [authGuard] },
                    { path: 'paciente/profile', loadChildren: () => import('./demo/components/paciente-profile/paciente-profile.module').then(m => m.PacienteProfileModule),canActivate: [authGuard] },
                    { path: 'paciente/citas/agendadas', loadChildren: () => import('./demo/components/paciente-citas-agendadas/paciente-citas-agendadas.module').then(m => m.PacienteCitasAgendadasModule),canActivate: [authGuard] }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
