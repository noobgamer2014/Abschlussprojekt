// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './signup/sign-up.component';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to '/login'
  { path: 'login', component: LoginComponent }, // Define the 'login' route
  { path: 'dashboard', component: DashboardComponent }, // Define the 'dashboard' route
  { path: 'signup', component: SignUpComponent },
  {path: 'VacRequest', component: VacationRequestComponent},
  { path: 'request-vacation', component: VacationRequestComponent },
  { path: 'view-requests', component: ViewRequestsComponent },

  // ... other routes can be added here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
