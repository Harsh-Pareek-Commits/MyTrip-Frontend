import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { TravelEntityDto } from 'src/app/EntityDtoModels/travel-entity-dto';
import { Travel } from 'src/app/Models/travel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TravelsService } from 'src/app/Services/travels.service';
@Component({
  selector: 'app-add-travels',
  templateUrl: './add-travels.component.html',
  styleUrls: ['./add-travels.component.css']
})
export class AddTravelsComponent implements OnInit {

  travelForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  travel!: any;
  constructor(private travelservice:TravelsService ,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
     ngOnInit(): void {
      
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
console.log(sessionStorage.getItem('token'))
var travels=new TravelEntityDto(0,this.travelForm.get('travelsName')?.value,this.travelForm.get('agentName')?.value,this.travelForm.get('agentAddress')?.value,this.travelForm.get('agentContact')?.value);
this.travelservice.addTravels(travels).subscribe(data=>{
this.travel=data;
this.toastr.success("Travels Added Sucessfully")
},(error)=>{
console.log(error);
this.toastr.error("Something went wrong please try again!!")
})

  }
}

}