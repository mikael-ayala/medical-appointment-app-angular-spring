import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/appointments'
  }

  existsByDate(date: String): Observable<Appointment> {
    return this.http.get(this.baseUrl + `/${date}`);
  }

  insert(body: Appointment): Observable<Appointment> {
    var header = { headers: new HttpHeaders().set('Authorization',  `Bearer ${sessionStorage.getItem('auth-token')}`)}

    return this.http.post(this.baseUrl, body, header);
  }
}
