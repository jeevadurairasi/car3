import { Component } from '@angular/core';
import { CarServiceService } from '../servies/car-service.service';

interface Ride {
  id: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent {

  bookingId: string = '';
  message: string = '';
  activeRides: Ride[] = [
  ]; // Example active rides with date and time
  cancelledRides: string[] = []; // Initialize cancelled rides

  constructor(private carService: CarServiceService) {}

  cancelBooking(): void {
    const success = this.carService.cancelBooking(this.bookingId);
    if (success) {
      this.message = 'Booking canceled successfully.';
      this.moveRideToCancelled(this.bookingId);
    } else {
      this.message = 'Failed to cancel booking. Please check the booking ID and try again.';
    }
  }

  moveRideToCancelled(bookingId: string): void {
    const index = this.activeRides.findIndex(ride => ride.id === bookingId);
    if (index > -1) {
      const cancelledRide = this.activeRides.splice(index, 1)[0]; // Remove from active rides
      this.cancelledRides.push(cancelledRide.id); // Add to cancelled rides
    }
  }
}
