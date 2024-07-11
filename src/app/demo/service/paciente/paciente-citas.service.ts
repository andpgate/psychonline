import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteCitasService {

  private baseUrl = 'http://localhost:8080/api/paciente';
  private cancelUrl = 'http://localhost:8080/api/cita/cancelar';

  constructor(private http: HttpClient) { }

  getCitas(idPaciente: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idPaciente}/citas`);
  }

  cancelarCita(citaId: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.cancelUrl}/${citaId}`, null);
  }
}
