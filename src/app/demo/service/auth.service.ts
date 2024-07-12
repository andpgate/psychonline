import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Nullable } from 'primeng/ts-helpers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey: string = 'authToken';
  private emailKey: string = 'email';
  private isDoctorKey: string = 'isDoctor';
  private pacienteRegisterUrl: string = 'http://localhost:8080/auth/register/paciente';
  private medicoRegisterUrl: string = 'http://localhost:8080/auth/register/medico';
  private pacienteLoginUrl: string = 'http://localhost:8080/auth/login/paciente';
  private medicoLoginUrl: string = 'http://localhost:8080/auth/login/medico';

  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.autoSignIn();
  }

  autoSignIn() {
    const authToken = localStorage.getItem(this.authTokenKey);
    if (authToken) {
      this.isAuth.next(true);
      const isDoctor = localStorage.getItem(this.isDoctorKey) === 'true';
      if (isDoctor) {
        this.router.navigate(['/medico']);
      } else {
        this.router.navigate(['/paciente']);
      }
    } else {
      this.isAuth.next(false);
    }
  }

  registerPaciente(username: string, password: string, telefono: string, email: string, nombre: string, apellido: string): Observable<any> {
    const body = { username, password, email, telefono, apellido, nombre};
    console.log(body);
    return this.http.post<any>(this.pacienteRegisterUrl, body);
  }

  registerMedico(username: string, password: string, telefono: string, email: string, nombre: string, apellido: string, titulos: string): Observable<any> {
    const body = { username, password, email, telefono, apellido, nombre, titulos};
    console.log(body);
    return this.http.post<any>(this.medicoRegisterUrl, body);
  }

  loginPaciente(username: string, password: string): Observable<any> {
    const body = { username, password };
    console.log(body);
    return this.http.post<any>(this.pacienteLoginUrl, body).pipe(
      tap(response => {
        this.handleAuthentication(response, false);
      })
    );
  }

  loginMedico(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log(body);
    return this.http.post<any>(this.medicoLoginUrl, body).pipe(
      tap(response => {
        this.handleAuthentication(response, true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.emailKey);
    localStorage.removeItem(this.isDoctorKey);
    this.isAuth.next(false);
    this.router.navigate(['']);
  }

  private handleAuthentication(response: any, isDoctor: boolean) {
    localStorage.setItem(this.authTokenKey, response.token);
    localStorage.setItem(this.emailKey, response.email);
    localStorage.setItem(this.isDoctorKey, isDoctor ? 'true' : 'false');
    this.isAuth.next(true);

    if (isDoctor) {
      this.router.navigate(['/medico']);
    } else {
      this.router.navigate(['/paciente']);
    }
  }
}
