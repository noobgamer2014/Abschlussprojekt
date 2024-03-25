import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service'; // Adjust the path as necessary
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService, // Assuming this service will handle registration
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      // Assuming a register method exists in the authentication service
      this.authService.register(
        this.signUpForm.value.username,
        this.signUpForm.value.email,
        this.signUpForm.value.password
      ).subscribe(
        response => {
          // Redirect to the login page upon successful registration
          this.router.navigate(['/login']);
        },
        error => {
          // Handle errors here (e.g., display an error message)
        }
      );
    }
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
