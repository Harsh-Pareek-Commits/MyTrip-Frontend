import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-add-travels',
  templateUrl: './add-travels.component.html',
  styleUrls: ['./add-travels.component.css']
})
export class AddTravelsComponent implements OnInit {

  travelForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  constructor(private authService: AuthServiceService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
   ngOnInit(): void {
    sessionStorage.clear();
    console.log("Local cleared");
    this.initForm();
     
    }
  initForm(){
    this.travelForm=this.formBuilder.group({
      travelsName:["",[Validators.required]],
      agentName:["",[Validators.required]],
      agentAddress:["",[Validators.required]],
      agentContact:["",[Validators.required]],
    })
  }
  get control(){

return this.travelForm.controls;
  }
  addTravel()
{
  this.submitted=true;
  
  if(this.travelForm.valid){

  }
}

}
