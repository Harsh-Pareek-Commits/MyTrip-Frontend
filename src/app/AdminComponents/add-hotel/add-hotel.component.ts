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
  constructor(private authService: AuthServiceService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
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

  }
}
}
