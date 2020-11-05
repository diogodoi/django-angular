import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://35.234.158.185:8000/';
  token = 'Token 197886fa592c241369dbc3a99b811728bbadd251	';
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
