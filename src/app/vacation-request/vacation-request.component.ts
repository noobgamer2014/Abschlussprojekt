import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent {
  vacationRequestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VacationRequestComponent>,
  ) {
    this.vacationRequestForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.vacationRequestForm.valid) {
      const formValue = this.vacationRequestForm.value;
      // TODO: Call the service method to handle the submission
      this.dialogRef.close(formValue);
    }
  }
}
