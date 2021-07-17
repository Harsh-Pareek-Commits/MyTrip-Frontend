import { HotelEntityDto } from './../../EntityDtoModels/hotel-entity-dto';
import { HotelService } from 'src/app/Services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
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
  constructor(private hotelservice:HotelService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
   ngOnInit(): void {
    sessionStorage.clear();
    console.log("Local cleared");
    this.initForm();
     
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
  addHotel()
{
  this.submitted=true;
  
  if(this.hotelForm.valid){
    console.log(sessionStorage.getItem('token'))
    var travels=new HotelEntityDto(0,this.hotelForm.get('hotelName')?.value,this.hotelForm.get('hotelType')?.value,this.hotelForm.get('hotelDescription')?.value,this.hotelForm.get('address')?.value,this.hotelForm.get('rent')?.value,this.hotelForm.get('status')?.value,this.hotelForm.get('city')?.value);
    this.hotelservice.addHotel(this.hotel).subscribe(data=>{
    this.hotel=data;
    this.toastr.success("Hotel Added Sucessfully")
    },(error)=>{
    console.log(error);
    this.toastr.error("Something went wrong please try again!!")
    })
  }}}