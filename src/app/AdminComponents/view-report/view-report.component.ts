import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Report } from './../../Models/report';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  reportForm!: FormGroup;
  faGoogle=faGooglePlusG;
  submitted = false;
  Report!:any;
  listReport!:Report[];

  constructor(private reportservice:ReportService,private formBuilder:FormBuilder,private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
this.viewReport();
  }
  viewReport()
  {
    this.reportservice.viewReport().subscribe(data=>{
    this.listReport=data;
    },(error)=> {
      if (error.staus = 404) {
        this.toastr.info("No Report found! Try again")
        this.router.navigate(['/admin/report'])
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