import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private baseUrl = 'http://localhost:8080/api/medico';
  private citaUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) { }

  getAllMedicos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/allmedicos`);
  }

  getMedicoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/perfil/${id}/especifico`);
  }

  solicitarCita(pacienteId: number, medicoId: number, fechaHora: string): Observable<any> {
    const body = {
      pacienteId,
      medicoId,
      fechaHora
    };
    return this.http.post<any>(`${this.citaUrl}/solicitar`, body);
  }
}
