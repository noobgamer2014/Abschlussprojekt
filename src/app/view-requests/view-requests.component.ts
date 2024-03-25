import { Component, OnInit } from '@angular/core';
import { VacationService } from '../services/vacation.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  // styleUrls if needed
})
export class ViewRequestsComponent implements OnInit {
  // Define the structure of a vacation request directly in the component
  vacationRequests!: any[]; // Use any[] if not referring to a specific type
  filteredRequests!: any[]; // Same as above

  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {
    this.vacationService.getAllVacationRequests().subscribe(requests => {
      this.vacationRequests = requests;
      this.filteredRequests = requests;
      // Handle response
    }, error => {
      console.error('Error fetching vacation requests', error);
      // Handle error
    });
  }

  applyFilter(event: Event): void {
      const inputElement = event.target as HTMLInputElement; // Safely typecast the event target
    	const filterValue = inputElement ? inputElement.value : '';
      // Implement filtering logic based on filterValue without referring to VacationRequestDTO
      this.filteredRequests = this.vacationRequests.filter(request => {
      // Example filtering logic; adjust according to actual data structure
      return request.status.toLowerCase().includes(filterValue.toLowerCase()) ||
             (request.reason && request.reason.toLowerCase().includes(filterValue.toLowerCase()));
    });
  }
}
