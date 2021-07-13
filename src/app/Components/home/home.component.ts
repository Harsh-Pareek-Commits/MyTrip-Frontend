import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Component, OnInit } from '@angular/core';
import { faBus,faHotel,faUserFriends  } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PackageService } from 'src/app/Services/package.service';
import { Package } from 'src/app/Models/package';
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
  package !: Package[];
  searchForm!: FormGroup;
  constructor(public router: Router, private formBuilder: FormBuilder,private toastr: ToastrService, private packageService: PackageService) { }

  ngOnInit(): void {
    this.initForm();
   this.getPackage();
  }
  initForm() {
    this.searchForm = this.formBuilder.group({
      from: ["", [Validators.required]],
      to: ["", [Validators.required]],
      dte: ["", [Validators.required]]

    })
  }
  getPackage() {
   
  
        this.packageService.getAllPack().subscribe(data => {
      
          this.package = data;

        },(error) => { 
       
          if(error.status == 404)
         {
          this.toastr.info('No Package Found');
         }
          else{           
          this.toastr.error ('Error!');
          console.log(error);
          }
        }


        )
      }
    
  
packdetails(packageId:number){
this.router.navigate(['/pack',packageId])
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
