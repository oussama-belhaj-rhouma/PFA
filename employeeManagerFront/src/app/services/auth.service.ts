import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private token= "myToken";
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  getToken(): string {
    return this.token;
  }

  register(username: string, email: string, password: string): Observable<any> {
    
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }


}