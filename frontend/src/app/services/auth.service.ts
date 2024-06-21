import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { PatientRegister } from '../models/patient-register';
import { DoctorRegister } from '../models/doctor-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/auth'
  }

  login(body: Login): Observable<Login> {
    console.log(body.email, body.password)
    return this.http.post(this.baseUrl + '/login', body);
  }

  patientRegister(body: PatientRegister): Observable<PatientRegister> {
    console.log(body.name, body.lastname, body.email, body.password)
    return this.http.post(this.baseUrl + '/patient-register', body);
  }

  doctorRegister(body: DoctorRegister): Observable<DoctorRegister> {
    console.log(body.name, body.lastname, body.email, body.password)
    return this.http.post(this.baseUrl + '/doctor-register', body);
  }
}