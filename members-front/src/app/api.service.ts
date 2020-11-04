import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/';
  token = 'Token ad34d8891841edf812dd46c0ff2d3861c003b65a';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json').set('Authorization',this.token);
  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders });
  };
  getMember(id): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id +'/',
    {headers: this.httpHeaders });
  };
  
}
