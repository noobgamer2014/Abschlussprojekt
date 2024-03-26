import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  constructor(private http: HttpClient) { }
  

  submitVacationRequest(requestData: any) {
    // Replace the URL with your actual endpoint for creating vacation requests
    return this.http.post<any>(`${environment.apiBaseUrl}/Vacation/requestVacation`, requestData);
  }
  getAllVacationRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBaseUrl}/requests`);
  }

  getLeftoverDays(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/Vacation/leftoverDays`);
  }

  getRecentVacations(): Observable<any[]> { // Replace 'any' with the appropriate type
    return this.http.get<any[]>(`${environment.apiBaseUrl}/Vacation/recentVacations`);
  }
}
