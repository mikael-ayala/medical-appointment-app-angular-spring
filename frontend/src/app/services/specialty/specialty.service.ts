import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialty } from '../../models/specialty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/specialties';
  }

  findAll(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.baseUrl);
  }
}
