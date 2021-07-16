import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Customer } from 'src/app/Models/customer';
import { UserService } from 'src/app/Services/user.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  cust!: Customer
  faPencilAlt=faPencilAlt;
  accountForm!: FormGroup;
  submitted = false;
  constructor(private userservice: UserService, private formBuilder:FormBuilder,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  get control(){

    return this.accountForm.controls;
      }
  saveCustomer() {
  var newCust=new Customer(this.cust.customerId ,this.cust.customerName,this.cust.customerAddress,this.cust.customerMobileNo,this.cust.email)
  }
  change(id:string){
    (document.getElementById(id) as HTMLInputElement).disabled = !((document.getElementById(id) as HTMLInputElement).disabled);
    (document.getElementById("save") as HTMLInputElement).style.visibility = "visible";
  }
  initForm(){
    this.accountForm=this.formBuilder.group({
      name:["",[Validators.required]],
      mobile:["",[Validators.required]],
      address:["",[Validators.required]],
      email:["",[Validators.required]]

    })
  }
  getCustomer() {
    this.userservice.getCustById().subscribe(data => {
      this.cust = data;
    }, (error) => {
      if (error.staus = 404) {
        this.toastr.info("No Customer found! Please Login")
        
      } else if (error.staus = 403) {
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
