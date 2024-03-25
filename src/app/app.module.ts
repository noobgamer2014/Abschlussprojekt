import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card'
import {  MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './signup/sign-up.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarModule } from './calendar/calendar.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { VacationService } from './services/vacation.service';
import { AuthInterceptor } from './auth.interceptor';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    VacationRequestComponent,
    ViewRequestsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule ,
    MatCardModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatTooltipModule,
    FullCalendarModule,
    MatToolbarModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [VacationRequestComponent]
})
export class AppModule { }
