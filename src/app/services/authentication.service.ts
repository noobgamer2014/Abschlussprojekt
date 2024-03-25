import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';   
import { Router } from '@angular/router';

export interface User {
  username: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>; 

  constructor(private http: HttpClient,private router: Router) {
    // Initialize currentUserSubject with null or the current user from localStorage
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable(); // Initialize the currentUser observable
    //cookies Login 
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value; 
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/Authentication/login`, { username, password }).pipe(
      tap((response: any) => {
        // Assuming the response includes a token; adjust as per your API response
        localStorage.setItem('accessToken', response.token);
      }),
      catchError(error => {
        // Handle or log error
        console.error('Login error:', error);
        return of(null); // Return an observable with null value in case of error
      })
    );
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    // Implement token validity check here if necessary
    return !!token;
  }

  register(username: string, email: string, password: any) {
    return this.http.post<any>(`${environment.apiBaseUrl}/Authentication/register`, { username, email, password });
  }

  logout() {
    // Remove user from local storage and reset currentUserSubject
    localStorage.removeItem('accessToken');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}
