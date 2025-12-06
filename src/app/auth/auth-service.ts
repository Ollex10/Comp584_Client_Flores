import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './login-request';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'auth_token';
  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.apiUrl + 'api/Admin', loginRequest).pipe(tap(response => {
      // Handle successful login, e.g., store token
      if (response.success){
        localStorage.setItem('token', response.token);
      }
    }));
  }

  logout(){
    localStorage.removeItem(this.token);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.token) != null;
  }
}
