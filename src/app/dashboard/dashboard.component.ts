import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Ensure the plugin is imported

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  calendarPlugins = [dayGridPlugin]; // Define plugins as a property of the component
  calendarView = 'dayGridMonth'; // Define the initial view

  constructor() { }
}
