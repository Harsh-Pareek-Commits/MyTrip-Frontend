import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
  addRouteForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  constructor(private authService: AuthServiceService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
   ngOnInit(): void {
    this.addRouteForm=this.formBuilder.group({
      routeFrom:["",[Validators.required]],
      routeTo:["",[Validators.required]],
      deptDate:["",[Validators.required]],
      arrivalDate:["",[Validators.required]],
      deptTime:["",[Validators.required]],
      arrivalTime:["",[Validators.required]],
      pickUpPoint:["",[Validators.required]],
      fare:["",[Validators.required]],

      busType:["",[Validators.required]],
      busNumber:["",[Validators.required]],
      busCapacity:["",[Validators.required]],
      travel:["",[Validators.required]],

    })
  }
  get control(){

return this.addRouteForm.controls;
  }
  addRoute()
  {
    this.submitted=true;
    
    if(this.addRouteForm.valid){
  
    }
  }
}