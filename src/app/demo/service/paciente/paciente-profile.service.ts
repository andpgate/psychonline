import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = 'http://localhost:8080/api/paciente';

  constructor(private http: HttpClient) { }

  getPerfil(pacienteId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/perfil/${pacienteId}`);
  }
}
