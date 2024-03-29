import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the day grid plugin

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: any; // Define the calendar options

  constructor() {
    this.calendarOptions = {
      plugins: [dayGridPlugin], 
      initialView: 'dayGridMonth', 
      
    };
  }
}
