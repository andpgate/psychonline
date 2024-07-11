import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private baseUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) { }

  getCitasAgendadas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agendadas`);
  }

  programarCita(citaId: number, pacienteId: number): Observable<any> {
    const body = {
      cita_id: citaId,
      paciente_id: pacienteId
    };
    return this.http.post<any>(`${this.baseUrl}/programar`, body);
  }
}
