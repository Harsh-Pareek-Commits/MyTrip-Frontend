import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBus, faHotel } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/Models/booking';
import { BookingsService } from 'src/app/Services/bookings.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookinglist!: Booking[]
  booking!: Booking
  faBus = faBus;
  faHotel = faHotel;
  constructor(private bookingService: BookingsService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBookings()
  }
  showDetails(id:number){
    this.router.navigate(['/details',id])
  }
  cancel(id:number){
    if (confirm("Are you sure you want to cancel this bookings")) {
      this.bookingService.cancel(id).subscribe(data=>{
        this.booking=data;
        
        this.router.navigate(['/booking'])
      .then(() => {
        window.location.reload();
      });
      this.toastr.success("Booking Cancelled")
      }, (error) => {
        if(error.error.message){
          this.toastr.error(error.error.message)}
        this.toastr.error("Something went wrong")
        console.log(error)
      })
    } else {
      console.log("You pressed Cancel!");
    }
 
  }
  getBookings() {
    this.bookingService.getBookings().subscribe(data => {
      this.bookinglist = data
      console.log(this.bookinglist)
    },
      (error) => {
        if (error.status == 404) {
          this.toastr.info('No Package Found');
        }else if (error.status == 403) {
          this.toastr.error('Please Login First');
          this.router.navigate(["/login"])
        }
        else {
          if(error.error.message){
            this.toastr.error(error.error.message)}
          this.toastr.error('Error!');
          console.log(error);
        }
      }
    )
  }
}
