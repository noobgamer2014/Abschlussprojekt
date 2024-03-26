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

  calculateVacationDays(): number {
    const startDate = this.vacationRequestForm.get('startDate')!.value;
    const endDate = this.vacationRequestForm.get('endDate')!.value;
    if (startDate && endDate) {
      let start = new Date(startDate);
      const end = new Date(endDate);
      let diffDays = 0;
  
      while (start <= end) {
        const dayOfWeek = start.getDay();
        // Weekdays are 0 (Sunday) to 6 (Saturday). Exclude 0 and 6.
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          diffDays++;
        }
        // Move to the next day
        start = new Date(start.setDate(start.getDate() + 1));
      }
  
      return diffDays;
    }
    return 0;
  }
  
  submitForm() {
    if (this.vacationRequestForm.valid) {
      const formValue = this.vacationRequestForm.value;
      // TODO: Call the service method to handle the submission
      this.dialogRef.close(formValue);
    }
  }
}
