import { error } from '@angular/compiler/src/util';
import { Admin } from './../../Models/admin';
import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { AdminEntityDto } from 'src/app/EntityDtoModels/admin-entity-dto';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  adm!:any;
  constructor(private userservice:UserService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
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
     var admin =new AdminEntityDto(0,this.addAdminForm.get('adminEmail')?.value,this.addAdminForm.get('password')?.value,this.addAdminForm.get('adminName')?.value,this.addAdminForm.get('mobileNumber')?.value);
    this.userservice.addAdmin(admin).subscribe(data=>{
      this.adm=data;
      this.toastr.success("Admin added successfully")
    },(error)=>{
      console.log(error);
      this.toastr.error("Somthing Went Wrong. Please try again")

    })
    

  }
}
  }
