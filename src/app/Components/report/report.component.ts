import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from './../../Services/report.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/Services/bookings.service';
import { ReportEntityDto } from 'src/app/EntityDtoModels/report-entity-dto';
import { Booking } from 'src/app/Models/booking';
import { BookingEntityDto } from 'src/app/EntityDtoModels/booking-entity-dto';
import { PackageEntityDto } from 'src/app/EntityDtoModels/package-entity-dto';
import { RouteEntityDto } from 'src/app/EntityDtoModels/route-entity-dto';
import { PaymentDetailsEntityDto } from 'src/app/EntityDtoModels/payment-details-entity-dto';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  book!: Booking
  reportForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  id:any
  constructor(private reportService:ReportService, private bookingService: BookingsService,private formBuilder:FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }
  ngOnInit(): void {
    
    this.initForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ? params.get('id') : undefined;

    })
    this.getBooking()
  }
  initForm(){
    this.reportForm=this.formBuilder.group({
      reportType:["",[Validators.required]],
      reportName:["",[Validators.required]],
    })
  }
  get control(){

return this.reportForm.controls;
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
        if(error.error.message){
          this.toastr.error(error.error.message)}
        console.log(error);
        this.router.navigate(['/home'])
        this.toastr.error("Something went wrong")
      }
    }
    )
  }
  addReport(){
    this.submitted=true;
  
  if(this.reportForm.valid){
    var data=this.book?.pack;
    var r=data?.route;
    const pay=new PaymentDetailsEntityDto(0,"Razor Pay",((data.packageCost)+(data.packageCost*0.5).toString()),"Done",sessionStorage.getItem("userId")!);
    var route=new RouteEntityDto(r?.routeId,r?.routeFrom,r?.routeTo,r?.buses,r?.departureDate,r?.arrivalDate,r?.arrivalTime,r?.departureTime,r?.duration,r?.pickupPoint,r?.fare);
    var pack = new PackageEntityDto(data?.packageId,data?.packageName,data?.packageDescription,data?.packageType,route,data?.hotel,data?.packageCost) ;
    var booking=new BookingEntityDto(this.book?.bookingId,this.book?.bookingType,this.book?.description,this.book?.bookingTitle,this.book?.bookingDate,pack,sessionStorage.getItem("userId")!,pay,this.book?.ticket);
    var bookingList:BookingEntityDto[]=[];
     bookingList.push(booking);
     console.log(bookingList);
    var report=new ReportEntityDto(0,this.reportForm.get('reportName')?.value,this.reportForm.get('reportType')?.value,bookingList);
    console.log(report)
    this.reportService.addReport(report).subscribe(data=>{
      var repo=data;
      this.toastr.success("Report Submitted")
      this.router.navigate(["/home"])
    },
    (error) => {
       if (error.status == 403) {
        this.toastr.error('Please Login First');
        this.router.navigate(["/login"])
      }
      else {
        if(error.error.message){
          this.toastr.error(error.error.message)}
        this.toastr.error('Something went wronge !!!');
       // this.router.navigate(["/home"])
        console.log(error);
      }
    })
  }

}}