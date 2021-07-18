
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from './../../Services/report.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  constructor(private reportservice:ReportService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.addReport;
    this.initForm;
  }
  initForm(){
    this.reportForm=this.formBuilder.group({
      reportType:["",[Validators.required]],
      reportName:["",[Validators.required]],
    })
  }
  get control(){

return this.reportForm.controls;
  }
  addReport(){
    this.submitted=true;
  
  if(this.reportForm.valid){
  }

}}
