import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  constructor(private authService: AuthServiceService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    console.log("Local cleared");
    this.initForm();
  } initForm(){
    this.addAdminForm=this.formBuilder.group({
      adminName:["",[Validators.required]],
      adminEmail:["",[Validators.required]],
      password:["",[Validators.required]],
      mobileNumber:["",[Validators.required]]


    })
    

}get control(){

  return this.addAdminForm.controls;
    }
addAdmin()
{
  this.submitted=true;
  
  if(this.addAdminForm.valid){

  }
}
  }
