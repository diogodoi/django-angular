import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://35.234.158.185:8000/';
  token = 'Token 197886fa592c241369dbc3a99b811728bbadd251';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json').set('Authorization',this.token);
  
  constructor(private http: HttpClient) { }
  getMember(id): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id +'/',
    {headers: this.httpHeaders });
  };
  updateMember(member): Observable<any> {
    let body = { name: member.name , surname:member.surname, phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders });
  };
  saveNewMember(member): Observable<any> {
    return this.http.post(this.baseUrl + 'members/' ,member,
    {headers: this.httpHeaders });
  };
  deleteMember(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders });
  };
}
