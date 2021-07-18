import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/Models/booking';
import { BookingsService } from 'src/app/Services/bookings.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  book!: Booking
  id!: any
  constructor(private bookingService: BookingsService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ? params.get('id') : undefined;

    })
  }

  ngOnInit(): void {
    this.getBooking();
  }

 Report(id:number){
  this.router.navigate(['/report',id])
 }

  cancel(id:number){
    if (confirm("Are you sure you want to cancel this bookings")) {
      this.bookingService.cancel(id).subscribe(data=>{
        this.book=data;
        
        this.router.navigate(['/booking'])
      .then(() => {
        window.location.reload();
      });
      this.toastr.success("Booking Cancelled")
      }, (error) => {
        this.toastr.error("Something went wrong")
        console.log(error)
      })
    } else {
      console.log("You pressed Cancel!");
    }
 
  }
  getBooking() {
    this.bookingService.getBooking(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book)
    }, (error) => {
      if (error.staus = 404) {
        this.toastr.info("No Bookings found! Try again")
        this.router.navigate(['/bookings'])
      } else if (error.staus = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/home'])
        this.toastr.error("Something went wrong")
      }
    }
    )

  }

}
