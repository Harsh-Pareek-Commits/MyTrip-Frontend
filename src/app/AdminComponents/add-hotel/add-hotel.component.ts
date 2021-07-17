import { error } from '@angular/compiler/src/util';
import { HotelEntityDto } from './../../EntityDtoModels/hotel-entity-dto';
import { HotelService } from 'src/app/Services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Hotel } from 'src/app/Models/hotel';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotelForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  hotel!:any;
  listhotel!:Hotel[];
  deletedhotel!:any;
  constructor(private hotelservice:HotelService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
   ngOnInit(): void {

    this.initForm();
    this.viewHotel();
    }
  initForm(){
    this.hotelForm=this.formBuilder.group({
      hotelName:["",[Validators.required]],
      hotelType:["",[Validators.required]],
      hotelDescription:["",[Validators.required]],
      hotelAddress:["",[Validators.required]],
      hotelRent:["",[Validators.required]],
      hotelStatus:["",[Validators.required]],
      hotelCity:["",[Validators.required]],
    })
  }
  get control(){

return this.hotelForm.controls;
  }
  delete(id:number){
  this.hotelservice.deleteHotel(id.toString()).subscribe(data=>{
    this.deletedhotel=data;
    this.router.navigate(['/admin/hotel'])
    .then(() => {
      window.location.reload();
    });
    this.toastr.success("Hotel removed")
  },(error)=> {
    if (error.staus = 404) {
      this.toastr.info("No Hotels found with this Id! Try again")
      this.router.navigate(['/admin/hotel'])
    } else if (error.staus = 403) {
      this.toastr.error("Please login first!")
      this.router.navigate(['/login'])
    }
    else {
      console.log(error);
      this.router.navigate(['/admin/dashboard'])
      this.toastr.error("Something went wrong")
    }
  })
  }
  viewHotel()
  {
    this.hotelservice.viewHotel().subscribe(data=>{
    this.listhotel=data;
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Hotels found! Try again")
        this.router.navigate(['/admin/hotel'])
      } else if (error.staus = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
  }
  addHotel()
{
  this.submitted=true;
  
  if(this.hotelForm.valid){
    console.log(sessionStorage.getItem('token'))
    var newhotel=new HotelEntityDto(0,this.hotelForm.get('hotelName')?.value,this.hotelForm.get('hotelType')?.value,this.hotelForm.get('hotelDescription')?.value,this.hotelForm.get('hotelAddress')?.value,this.hotelForm.get('hotelRent')?.value,this.hotelForm.get('hotelStatus')?.value,this.hotelForm.get('hotelCity')?.value);
    this.hotelservice.addHotel(newhotel).subscribe(data=>{
    this.hotel=data;
    this.router.navigate(['/admin/hotel'])
    .then(() => {
      window.location.reload();
    });
    this.toastr.success("Hotel Added Sucessfully")
    },(error)=>{
    console.log(error);
    this.toastr.error("Something went wrong please try again!!")
    })
  }}}