import { Route } from 'src/app/Models/route';
import { ReportService } from './../../Services/report.service';
import { RoutesService } from 'src/app/Services/routes.service';
import { TravelsService } from 'src/app/Services/travels.service';
import { Travel } from './../../Models/travel';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TravelEntityDto } from 'src/app/EntityDtoModels/travel-entity-dto';
@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
  addRouteForm!: FormGroup;
  
  faGoogle = faGooglePlusG;
  submitted = false;
  listTravel!: Travel[];
  listRoute!: Route[];
  deletedRoute!:any;
  divs: number[] = [];


  constructor(private routeService: RoutesService, private authService: AuthServiceService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router,private travelService:TravelsService) { 

  }
  ngOnInit(): void {
    this.initForm();
    this.gettravel();
    this.viewRoute();
  }
  initForm() {
    this.addRouteForm = this.formBuilder.group({
      routeFrom: ["", [Validators.required]],
      routeTo: ["", [Validators.required]],
      deptDate: ["", [Validators.required]],
      arrivalDate: ["", [Validators.required]],
      deptTime: ["", [Validators.required]],
      arrivalTime: ["", [Validators.required]],
      pickUpPoint: ["", [Validators.required]],
      fare: ["", [Validators.required]],

      bus: this.formBuilder.array([]) ,
     

    })
  }
  bus() : FormArray {
    return this.addRouteForm.get("bus") as FormArray
  }
   
  newBus(): FormGroup {
    return this.formBuilder.group({
      busType: '',
      busNumber: '',
      busCapacity: '',
      travel: '',
    })
  }
  addBus() {
    this.bus().push(this.newBus());
  }
  onSubmit() {
    
    console.log(this.addRouteForm.value)
  }

  get control() {

    return this.addRouteForm.controls;
  }
  addRoute() {
console.log(this.addRouteForm.value)
      this.submitted=true;
      if(this.addRouteForm.valid){
        //this.travelService.travelbyid(this.)
       // var travel=new TravelEntityDto()
      }
  }
  gettravel() {
    this.routeService.getTravel().subscribe(data => {
      this.listTravel = data;
    }, (error) => {
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
  viewRoute() {
    this.routeService.viewRoute().subscribe(data => {
      this.listRoute = data;
    }, (error) => {
      if (error.status === 404) {
        this.toastr.info("No Route found! Try again")
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
  delete(id:number){
    this.routeService.deleteRoute(id.toString()).subscribe(data=>{
      this.deletedRoute=data;
      this.router.navigate(['/admin/route'])
      .then(() => {
        window.location.reload();
      });
      this.toastr.success("Route removed")
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Routes found with this Id! Try again")
        this.router.navigate(['/admin/route'])
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

}