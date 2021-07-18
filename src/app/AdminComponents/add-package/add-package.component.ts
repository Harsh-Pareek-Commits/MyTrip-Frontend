import { Hotel } from 'src/app/Models/hotel';
import { Route } from 'src/app/Models/route';
import { PackageService } from 'src/app/Services/package.service';
import { Package } from 'src/app/Models/package';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  addPackageForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  listPackage!:Package[];
  listRoute!:Route[];
  listHotel!:Hotel[];
  constructor(private packageservice:PackageService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }

    ngOnInit(): void {

      this.initForm();
      this.getPackage();
      this.viewRoute();
      this.viewHotel();
      }
      initForm(){
    this.addPackageForm=this.formBuilder.group({
      packName:["",[Validators.required]],
      packDesc:["",[Validators.required]],
      packType:["",[Validators.required]],
      packCost:["",[Validators.required]],
      route:["",[Validators.required]],
      hotel:["",[Validators.required]],

    })
  }
  get control(){

return this.addPackageForm.controls;
  }
  addPackage()
  {
    this.submitted=true;
    
    if(this.addPackageForm.valid){
      console.log(this.addPackageForm.value);
      this.addPackageForm.get('hotel')?.value.array.forEach((element: any) => {
        console.log(element);
      });
  
    }
  }
  getPackage(){
    this.packageservice.getAllPack().subscribe(data=>{
    this.listPackage=data;
    },(error)=> {
      if (error.status === 404) {
        this.toastr.info("No Package found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
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
  viewRoute()
  {
    this.packageservice.viewRoute().subscribe(data=>{
    this.listRoute=data;
    },(error)=> {
      if (error.status === 404) {
        this.toastr.info("No Route found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
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
    this.packageservice.viewHotel().subscribe(data=>{
    this.listHotel=data;
    },(error)=> {
      if (error.status === 404) {
        this.toastr.info("No Hotels found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
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

}
