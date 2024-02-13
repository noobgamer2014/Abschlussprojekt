// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'; // Adjust the path as necessary


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

  redirectLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    
    ////const bcrypt = require('bcrypt');
    //const saltRounds = 10;
    //bcrypt.hash(password,saltRounds)
    ////next: () => {
        // Handle response here, e.g., navigate to the login page or dashboard
       // this.router.navigate(['/login']);
      //},
      //error: error => {
       // console.error(error);
        // Optionally handle registration error, e.g., show an error message
      }
    }//);
 // }
//}
