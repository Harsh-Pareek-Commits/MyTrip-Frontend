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
  listTravel!:Travel[];
  deletetravel!:any;
  constructor(private travelservice:TravelsService ,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
     ngOnInit(): void {
      
    this.initForm();
    this.viewtravel();
     
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
  delete(id:number){
    this.travelservice.deleteTravel(id.toString()).subscribe(data=>{
      this.deletetravel=data;
      this.router.navigate(['/admin/travels'])
      .then(() => {
        window.location.reload();
      });
      this.toastr.success("Travel removed")
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Travels found with this Id! Try again")
        this.router.navigate(['/admin/travels'])
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
  viewtravel()
  {
    this.travelservice.viewTravel().subscribe(data=>{
    this.listTravel=data;
    },(error)=> {
      if (error.status === 404) {
        this.toastr.info("No Travels found! Try again")
        this.router.navigate(['/admin/travels'])
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
  addTravel()
{
  this.submitted=true;
  
  if(this.travelForm.valid){
console.log(sessionStorage.getItem('token'))
var travels=new TravelEntityDto(0,this.travelForm.get('travelsName')?.value,this.travelForm.get('agentName')?.value,this.travelForm.get('agentAddress')?.value,this.travelForm.get('agentContact')?.value);
this.travelservice.addTravels(travels).subscribe(data=>{
this.travel=data;
this.router.navigate(['/admin/travel'])
    .then(() => {
      window.location.reload();
    });
this.toastr.success("Travels Added Sucessfully")
},(error)=>{
console.log(error);
this.toastr.error("Something went wrong please try again!!")
})

  }
}

}