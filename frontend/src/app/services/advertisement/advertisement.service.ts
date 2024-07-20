import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from '../../models/advertisement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/advertisements'
  }

  findAll(pageNumber: string = '0', pageSize: string = '15') {
    return this.http.get(this.baseUrl + `?page=${pageNumber}&size=${pageSize}`);
  }

  insert(body: Advertisement): Observable<Advertisement> {
    var header = { headers: new HttpHeaders().set('Authorization',  `Bearer ${sessionStorage.getItem('auth-token')}`)}

    return this.http.post(this.baseUrl, body, header);
  }
}
