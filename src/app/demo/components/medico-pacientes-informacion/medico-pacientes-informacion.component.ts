import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-medico-pacientes-informacion',
  standalone: true,
  imports: [CommonModule, FormsModule], // Incluir FormsModule en las importaciones
  templateUrl: './medico-pacientes-informacion.component.html',
  styleUrls: ['./medico-pacientes-informacion.component.scss']
})
export class MedicoPacientesInformacionComponent {
  paciente: any = {};
  historias: Array<{fecha: string, descripcion: string}> = [];
  nuevaHistoria: {fecha: string, descripcion: string} = {fecha: '', descripcion: ''};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.paciente.nombre = params['nombre'];
      this.paciente.email = params['email'];
      this.paciente.telefono = params['telefono'];
    });

    // Cargar las historias del paciente
    this.historias = [
      { fecha: '2024-07-01', descripcion: 'Consulta inicial, paciente con dolor de cabeza.' },
      { fecha: '2024-07-15', descripcion: 'Seguimiento, dolor de cabeza ha disminuido.' },
      // Más historias...
    ];
  }

  agregarHistoria() {
    if (this.nuevaHistoria.fecha && this.nuevaHistoria.descripcion) {
      this.historias.push({ ...this.nuevaHistoria });
      this.nuevaHistoria = { fecha: '', descripcion: '' };
    }
  }
}
