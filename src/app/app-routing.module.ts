import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'medico/profile', loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule) },
                    { path: 'medico', loadChildren: () => import('./demo/components/medico/medico.module').then(m => m.MedicoModule) },
                    { path: 'medico/horario', loadChildren: () => import('./demo/components/medico-gestion-horario/medico-gestion-horario.module').then(m => m.MedicoGestionHorarioModule) },
                    { path: 'medico/cita/informacion', loadChildren: () => import('./demo/components/informacion-cita/informacion-cita.module').then(m => m.InformacionCitaModule) },
                    { path: 'paciente', loadChildren: () => import('./demo/components/paciente/paciente.module').then(m => m.PacienteModule) },
                    { path: 'paciente/medicos', loadChildren: () => import('./demo/components/paciente-medico/paciente-medico.module').then(m => m.PacienteMedicoModule) },
                    { path: 'paciente/medicos/perfil', loadChildren: () => import('./demo/components/paciente-medico-perfil/paciente-medico-perfil.module').then(m => m.PacienteMedicoPerfilModule) },
                    { path: 'medico/citas/solicitudes', loadChildren: () => import('./demo/components/medico-solicitudes/medico-solicitudes.module').then(m => m.MedicoSolicitudesModule) },
                    { path: 'medico/pacientes', loadChildren: () => import('./demo/components/medico-pacientes/medico-pacientes.module').then(m => m.MedicoPacientesModule) },
                    { path: 'medico/pacientes/informacion', loadChildren: () => import('./demo/components/medico-pacientes-informacion/medico-pacientes-informacion.module').then(m => m.MedicoPacientesInformacionModule) },
                    { path: 'paciente/citas', loadChildren: () => import('./demo/components/paciente-citas/paciente-citas.module').then(m => m.PacienteCitasModule) },
                    { path: 'medico/citas', loadChildren: () => import('./demo/components/medico-citas/medico-citas.module').then(m => m.MedicoCitasModule) },
                    { path: 'paciente/profile', loadChildren: () => import('./demo/components/paciente-profile/paciente-profile.module').then(m => m.PacienteProfileModule) },
                    { path: 'paciente/citas/agendadas', loadChildren: () => import('./demo/components/paciente-citas-agendadas/paciente-citas-agendadas.module').then(m => m.PacienteCitasAgendadasModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
