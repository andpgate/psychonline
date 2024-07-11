import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private baseUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) { }

  getSolicitudes(medicoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${medicoId}/solicitadas`);
  }

  aceptarSolicitud(citaId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/aceptar/${citaId}`, null);
  }

  rechazarSolicitud(citaId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/rechazar/${citaId}`, null);
  }
}
