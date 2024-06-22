import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { PatientRegister } from '../models/patient-register';
import { DoctorRegister } from '../models/doctor-register';
import { LoginResponse } from '../models/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;
  private checkRole = new BehaviorSubject('');
  currentRole = this.checkRole.asObservable();

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/auth'
  }

  changeRole(role: string) {
    this.checkRole.next(role);
  }

  login(body: Login) {
    return this.http.post<LoginResponse>(this.baseUrl + '/login', body).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
        const role = JSON.parse(atob(value.token.split('.')[1])).role
        this.changeRole(role)
      })
    );
  }

  logout() {
    sessionStorage.clear()
    this.changeRole('')
  }

  patientRegister(body: PatientRegister): Observable<PatientRegister> {
    return this.http.post(this.baseUrl + '/patient-register', body);
  }

  doctorRegister(body: DoctorRegister): Observable<DoctorRegister> {
    return this.http.post(this.baseUrl + '/doctor-register', body);
  }
}
