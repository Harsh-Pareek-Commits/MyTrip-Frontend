import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from './../../Services/feedback.service';
import { Feedback } from './../../Models/feedback';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  Feedback!:any;
  searchText!:any;
  listFeedback!:Feedback[];
  constructor(private feedbackservice:FeedbackService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.viewFeedback();
  }


  viewFeedback()
  {
    this.feedbackservice.viewFeedback().subscribe(data=>{
    this.listFeedback=data;
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Feedback found! Try again")
        this.router.navigate(['/admin/feedback'])
      } else if (error.staus = 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        if(error.error.message){
          this.toastr.error(error.error.message)}
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
  }
}
