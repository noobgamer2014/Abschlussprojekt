// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'https://localhost:7120'; // Adjust according to your API endpoint

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  async fetchDataAfterLogin(username: string, password: string): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      await this.authService.login(username, password);
    }

    // Once authenticated, proceed to fetch other data
    await this.fetchLeftoverDays();
    await this.fetchRecentVacations();
  }
  //Auf Event hören warten bis Token da ist oder Event abgeschlossen rxjs observables etc

  private async fetchLeftoverDays(): Promise<void> {
    const leftoverDaysUrl = `${this.apiUrl}/vacation/leftoverDays`;
    const response = await firstValueFrom(this.http.get(leftoverDaysUrl));
    console.log('LeftoverDays response:', response);
  }

  private async fetchRecentVacations(): Promise<void> {
    const recentVacationsUrl = `${this.apiUrl}/vacation/recentVacations`;
    const response = await firstValueFrom(this.http.get(recentVacationsUrl));
    console.log('RecentVacations response:', response);
  }
}
