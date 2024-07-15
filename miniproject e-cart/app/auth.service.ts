import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:5000/login';
  private registerUrl = 'http://localhost:5000/register';
  private userId: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password }).pipe(
      catchError((error) => {
        if (error.status === 400) {
          return throwError('Invalid credentials. Please try again.');
        } else {
          return throwError('An error occurred. Please try again later.');
        }
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { username, password }).pipe(
      catchError((error) => {
        return throwError('Registration failed. Please try again.');
      })
    );
  }

  setUserId(userId: string): void {
    this.userId = userId; // Set the user ID
  }

  getUserId(): string | null {
    return this.userId; // Return the stored user ID
  }
}
