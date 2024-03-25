import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacationService } from '../services/vacation.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from '../calendar/calendar/calendar.component';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { VacationRequestComponent } from '../vacation-request/vacation-request.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  leftoverDays: number = 0;
  recentVacations: any[] = []; // Consider defining a specific type for better type checking
  calendarOptions: any;
  
  

  constructor(private vacationService: VacationService, private router: Router,private authService: AuthenticationService,public dialog: MatDialog,) {
    
  }; 
  

  ngOnInit(): void {
    this.loadLeftoverDays();
    this.loadRecentVacations();
    this.setupCalendarOptions();
  }

  loadLeftoverDays(): void {
    this.vacationService.getLeftoverDays().subscribe({
      next: (days) => this.leftoverDays = days,
      error: (error) => console.error('Error fetching leftover vacation days:', error)
    });
  }

  loadRecentVacations(): void {
    this.vacationService.getRecentVacations().subscribe({
      next: (vacations) => this.recentVacations = vacations,
      error: (error) => console.error('Error fetching recent vacation requests:', error)
    });
  }

  setupCalendarOptions(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin], // Include the plugin in your calendar options
      events: [
        // Your events here
      ]
    };
  }

  openVacationRequestForm(): void {
    const dialogRef = this.dialog.open(VacationRequestComponent, {
      width: '500px', // Set the width of the dialog
      data: {} // You can pass data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The vacation request dialog was closed');
      // If needed, handle the result here. This will be the form value if submitted or null if canceled.
    });
  }

  navigateToViewRequests(): void {
    this.router.navigate(['/view-requests']);
  }

  logout(){
    this.authService.logout();
  }
}
