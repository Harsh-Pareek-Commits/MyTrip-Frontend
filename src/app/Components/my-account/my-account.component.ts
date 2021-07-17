import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Customer } from 'src/app/Models/customer';
import { UserService } from 'src/app/Services/user.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerEntityDto } from 'src/app/EntityDtoModels/customer-entity-dto';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  cust!: Customer
  faPencilAlt = faPencilAlt;
  accountForm!: FormGroup;
  submitted = false;
  constructor(private userservice: UserService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
    this.change("name");
    this.change("email");
    this.change("mobile");
    this.change("address");
    this.initForm();
  }

  change(id: string) {
    (document.getElementById(id) as HTMLInputElement).disabled = !((document.getElementById(id) as HTMLInputElement).disabled);
    (document.getElementById("save") as HTMLInputElement).disabled = false;
  }
  initForm() {
    this.accountForm = this.formBuilder.group({
      name: [{ value: '' }, Validators.required],
      mobile: [{ value: '' }, Validators.required],
      address: [{ value: '' }, Validators.required],


    })
  }
  get control() {

    return this.accountForm.controls;
  }

  saveCustomer() {

    this.submitted = true;

    if (this.accountForm.valid) {
      var name = this.accountForm.get('name')?.value;
      var add= this.accountForm.get('address')?.value;
      var mobile = this.accountForm.get('mobile')?.value;
      console.log("MOBILE"+mobile)
      if (name.value==="") {
        name =  this.cust.customerName;
      }
      if (add.value==="") {
        add = this.cust.customerAddress;
      }
      if (mobile.value==="") {

        mobile = parseInt(this.cust.customerMobileNo);
      }
      console.log("UPDATING USER");
      var newCust = new CustomerEntityDto(this.cust.customerId.toString(), name, add, mobile,"3",this.cust.email,"123456789")
      this.userservice.updatedCusstomer(newCust).subscribe(data => {
        this.cust = data;
        this.toastr.success("User Updated")
      }, (error) => {
        if (error.status = 404) {
          this.toastr.error("Something went wrong!")
        this.router.navigate(['/login'])
        } else if (error.status = 403) {
          this.toastr.error("Please login first!")
          this.router.navigate(['/login'])
        }
        else {
          console.log(error);
          //this.router.navigate(['/login'])
          this.toastr.error("Something went wrong!")
        }
      })
    }
  }
  getCustomer() {
    this.userservice.getCustById().subscribe(data => {
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
}
