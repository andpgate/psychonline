import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pacienteUrl = 'http://localhost:8080/auth/login/paciente';
  private medicoUrl = 'http://localhost:8080/auth/login/medico';

  constructor(private http: HttpClient) { }

  loginPaciente(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.pacienteUrl, body);
  }

  loginMedico(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.medicoUrl, body);
  }
}
