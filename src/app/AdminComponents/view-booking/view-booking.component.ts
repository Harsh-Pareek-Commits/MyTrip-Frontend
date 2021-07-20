import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/Models/booking';
import { Router } from '@angular/router';
import { BookingsService } from 'src/app/Services/bookings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  listBooking!:Booking[];
  deletebooking!:any;
  searchText!:any;
  constructor(private bookingservice:BookingsService ,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.viewbooking();
  }
  delete(id:number){
    this.bookingservice.cancel(id).subscribe(data=>{
      this.deletebooking=data;
      this.router.navigate(['/admin/bookings'])
      .then(() => {
        window.location.reload();
      });
      this.toastr.success("Booking removed")
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Bookings found with this Id! Try again")
       // this.router.navigate(['/admin/bookings'])
      } else if (error.staus = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        if(error.error.message){
          this.toastr.error(error.error.message)}
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
    }
  viewbooking()
  {
    this.bookingservice.viewBooking().subscribe(data=>{
    this.listBooking=data;
    },(error)=> {
      if (error.status === 404) {
        this.toastr.info("No Bookings found! Try again")
      //  this.router.navigate(['/admin/bookings'])
      } else if (error.status === 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        if(error.error.message){
          this.toastr.error(error.error.message)}
        //this.router.navigate(['/admin/dashboard'])
        this.toastr.error("No Bookings Found")
      }
    })
  }
}
