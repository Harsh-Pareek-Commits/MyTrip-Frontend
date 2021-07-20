import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { CustomerEntityDto } from 'src/app/EntityDtoModels/customer-entity-dto';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  faGoogle = faGooglePlusG;
  cust!: any;
  submitted = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {

    this.initForm();
    

  }
  initForm() {
    this.signupForm = this.formBuilder.group({
      custName: ["", [Validators.required]],
      userEmail: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmpassword: ["", [Validators.required]],
      custMobileNo: ["", [Validators.required]],
      custAddress: ["", [Validators.required]]

    }, {
      validator: ConfirmedValidator('password', 'confirmpassword')
    })
  }
  get control() {

    return this.signupForm.controls;
  }

  signUp() {
    this.submitted = true;

    if (this.signupForm.valid) {
      var customer = new CustomerEntityDto("0", this.signupForm.get('custName')?.value, this.signupForm.get('custAddress')?.value, this.signupForm.get('custMobileNo')?.value, "3", this.signupForm.get('userEmail')?.value, this.signupForm.get('password')?.value);

      this.userService.addcustomer(customer).subscribe(data => {
        this.cust = data;
        this.toastr.success("SignUp Success")
        this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });
      }, (error) => {
        if(error.error.message){
          this.toastr.error(error.error.message)}
        console.log(error);
        this.toastr.error("Somthing Went Wrong. Please try again")

      })

    }
  }
}