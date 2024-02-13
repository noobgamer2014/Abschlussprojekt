// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSignUp(): void {
    // Navigate to the sign-up page or open a sign-up dialog
    this.router.navigate(['/signup']); 
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.get('username')!.value, this.loginForm.get('password')!.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          console.log("Test");
        },
        error: error => {
          console.error(error);
          // Consider adding user feedback on login failure
        }
      });
  }
}
