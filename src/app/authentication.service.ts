import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';   

export interface User {
  username: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>; 

  constructor(private http: HttpClient) {
    // Initialize currentUserSubject with null or the current user from localStorage
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable(); // Initialize the currentUser observable
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value; 
  }

  login(username: string, password: any) {
    return this.http.post<User>(`${environment.apiBaseUrl}/Authentication/login`, { username, password })
      .pipe(map(user => {
        // Store user details and jwt token in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user); // Update the current user observable
        return user;
      }));
  }

  register(username: string, email: string, password: any) {
    return this.http.post<any>(`api/Authentication/register`, { username, email, password });
  }

  logout() {
    // Remove user from local storage and reset currentUserSubject
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
