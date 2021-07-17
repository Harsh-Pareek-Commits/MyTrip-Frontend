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

  }
}
