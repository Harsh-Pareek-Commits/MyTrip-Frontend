import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from './../../Services/feedback.service';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  constructor(private feedbackservice:FeedbackService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.addFeedback;
  }
  initForm(){
    this.feedbackForm=this.formBuilder.group({
      feedbackInfo:["",[Validators.required]],
      feedbackRating:["",[Validators.required]],
    })
  }
  get control(){

return this.feedbackForm.controls;
  }
  addFeedback(){
    this.submitted=true;
  }


}
