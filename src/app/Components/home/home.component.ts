import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Component, OnInit } from '@angular/core';
import { faBus,faHotel,faUserFriends  } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ 
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class HomeComponent implements OnInit {
  faBus=faBus;
  faHotel=faHotel;
  faUserFriends=faUserFriends;
  
  searchForm!: FormGroup;
  constructor(public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      from: ["", [Validators.required]],
      to: ["", [Validators.required]],
      dte: ["", [Validators.required]]

    })
  }
  searchPack() {
    if (this.searchForm.valid) {
       console.log("SEARCHING...........................");
      let source = this.searchForm.controls['from'].value;
      let dest = this.searchForm.controls['to'].value;
      let dt = this.searchForm.controls['dte'].value;
      console.log(source);
      this.router.navigate(['/package',source,dest,dt])
      
    }
  }
}
