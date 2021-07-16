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
  constructor(private authService: AuthServiceService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
   ngOnInit(): void {
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
  
    }
  }
}
