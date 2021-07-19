import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from './../../Services/feedback.service';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FeedbackEntityDto } from 'src/app/EntityDtoModels/feedback-entity-dto';
import { UserService } from 'src/app/Services/user.service';
import { Customer } from 'src/app/Models/customer';
import { CustomerEntityDto } from 'src/app/EntityDtoModels/customer-entity-dto';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  faGoogle = faGooglePlusG;
  submitted = false;
  faStar = faStar;
  rating!:number;
  cust!:Customer;
  constructor(private feedbackservice: FeedbackService,private userService:UserService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.initForm();
    this.getCustomer();
  }
  initForm() {
    this.feedbackForm = this.formBuilder.group({
      feedbackInfo: ["", [Validators.required]],
    
    })
  }
  
  Rating(rate: number) {
    this.rating=rate;
    for (let index = 1; index <= 5; index++) {
      if (index > rate) {

        (document.getElementById(index.toString()) as HTMLInputElement).style.color = "Black";
      }
      else {

        (document.getElementById(index.toString()) as HTMLInputElement).style.color = "Orange";

      }
    }

  }
  getCustomer() {
    this.userService.getCustById().subscribe(data => {
      this.cust = data;
    }, (error) => {
      if (error.status = 404) {
        this.toastr.info("No Customer found! Please Login")
        this.router.navigate(['/login'])
      } else if (error.status = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/login'])
        this.toastr.error("Something went wrong")
      }
    })
  }
  get control() {

    return this.feedbackForm.controls;
  }
  addFeedback() {
    this.submitted = true;
    if(this.feedbackForm.valid){
      var today = new Date();
      var month
      if((today.getMonth() + 1)<10){
        month="0"+(today.getMonth() + 1);
      }else{
        month=(today.getMonth() + 1);  
      }
      var dat
      if(today.getDate()<10){
        dat="0"+today.getDate()
      }
      else{
        dat=today.getDate()
      }
      var date = today.getFullYear() + '-' + month + '-' + dat;
      var newCust = new CustomerEntityDto(this.cust.customerId.toString(), this.cust.customerName, this.cust.customerAddress,parseInt( this.cust.customerMobileNo),"3",this.cust.email,"123456789")
      var feed=new FeedbackEntityDto(newCust,this.feedbackForm.get('feedbackInfo')?.value,this.rating,date)
      this.feedbackservice.addfeedback(feed).subscribe(data=>{
      var addedfeed=data;
      this.toastr.success("Thank you for your feedback")
      this.router.navigate(['/home'])
      }, (error) => {
      if (error.status = 404) {
        this.toastr.info("No Feedback found! Please Login")
        this.router.navigate(['/login'])
      } else if (error.status = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/login'])
        this.toastr.error("Something went wrong")
      }
    })
    }
  }


}
