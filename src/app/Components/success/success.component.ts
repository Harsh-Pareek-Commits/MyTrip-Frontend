import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BookingEntityDto } from 'src/app/EntityDtoModels/booking-entity-dto';
import { PackageEntityDto } from 'src/app/EntityDtoModels/package-entity-dto';
import { PaymentDetailsEntityDto } from 'src/app/EntityDtoModels/payment-details-entity-dto';
import { RouteEntityDto } from 'src/app/EntityDtoModels/route-entity-dto';
import { TicketDetailsEntityDto } from 'src/app/EntityDtoModels/ticket-details-entity-dto';
import { Booking } from 'src/app/Models/booking';
import { Bus } from 'src/app/Models/bus';
import { Package } from 'src/app/Models/package';
import { PaymentDetails } from 'src/app/Models/paymentDetails';
import { Route } from 'src/app/Models/route';
import { TicketDetails } from 'src/app/Models/ticketDetails';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { PackageService } from 'src/app/Services/package.service';
import { RoutesService } from 'src/app/Services/routes.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  payment!: PaymentDetails
  ticket!: TicketDetails
  isLoggedIn$: Observable<boolean> | undefined;
  token: any = '';
  route!:Route
  constructor(public router: Router,private routeService:RoutesService , private authService: AuthServiceService, private toastr: ToastrService, private checkout: CheckoutService, private packageService: PackageService) { }
  booking!: Booking
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.getPackage()
   
  }
  
  getPackage() {
    let id = localStorage.getItem("productId");
    this.packageService.getPackageEntityDto().subscribe(data => {
   
    console.log(data)
      var today = new Date();
      var month
      if((today.getMonth() + 1)<10){
        month="0"+(today.getMonth() + 1);
      }else{
        month=(today.getMonth() + 1);  
      }
      var dat
      if(today.getDate()<10){
        dat="0"+today.getDate()
      }
      else{
        dat=today.getDate()
      }
      var date = today.getFullYear() + '-' + month + '-' + dat;
      let tic=new TicketDetailsEntityDto(0,"Booked");
      const pay=new PaymentDetailsEntityDto(0,"Razor Pay",((data.packageCost)+(data.packageCost*0.5).toString()),"Done",sessionStorage.getItem("userId")!);
      var r=(data.route)
      var route=new RouteEntityDto(r.routeId,r.routeFrom,r.routeTo,r.buses,r.departureDate,r.arrivalDate,r.arrivalTime,r.departureTime,r.duration,r.pickupPoint,r.fare);
      var pack = new PackageEntityDto(data.packageId,data.packageName,data.packageDescription,data.packageType,route,data.hotel,data.packageCost) ;
      let book=new BookingEntityDto(0,localStorage.getItem("type")!,"sfsdfsd",pack.packName! ,date,pack,sessionStorage.getItem("userId")!,pay,tic)
      this.checkout.createBookings(book).subscribe(data => {
      this.toastr.success("Booking Success")
      }, (error) => {
  
  
        this.toastr.error('Error!');
        console.log(error);
  
      }
      )
    
    }, (error) => {

      if (error.status == 404) {
        this.toastr.info('No Package Found');
      } else if(error.status == 403)
      {
       this.toastr.warning('Login First ');
       this.router.navigate(['/login'])
      }
      else {
        this.toastr.error('Error!');
        console.log(error);
      }
    }


    )
  }
  onLogout() {
    this.toastr.success('Logout Success');
    this.authService.logout();
  }
}
