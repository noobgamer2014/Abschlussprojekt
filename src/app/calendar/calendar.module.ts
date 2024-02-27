import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendar module

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule // Import FullCalendar module here
  ],
  exports: [CalendarComponent] // Export CalendarComponent to be used in other parts of the app
})
export class CalendarModule { }
