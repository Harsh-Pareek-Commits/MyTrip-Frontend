import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import { Order } from 'src/app/Models/order';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  constructor(private checkout:CheckoutService, private user: UserService,private router:RouterModule, private authService: AuthServiceService, private toastr:ToastrService) { }
  or!:string
  order!:Order;
  amount!: number;
  cust!:Customer;
  isLoggedIn$: Observable<boolean> | undefined;
  token: any = '';
  rzp1:any;
  ngOnInit(): void {
    this.getUser();
    this.getOrder();
   
  }
  onLogout() {
    this.toastr.success('Logout Success');
    this.authService.logout();
  }

getUser(){
  this.user.getCustById().subscribe(data => {
      this.cust=data;
  })
}
options = {
  "key": "rzp_test_1dPoBp8Hl5VvTn", // Enter the Key ID generated from the Dashboard
  "amount": 0, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "My Trip",
  "description": "Test Transaction",
  
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
    var redirect_url;
    if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
      redirect_url = 'http://localhost:4200/failure';
    } else {
      redirect_url = 'http://localhost:4200/success';
    }
    location.href = redirect_url;
  },
  "prefill": {
      "name": "Gaurav Kumar",
      "email": "gaurav.kumar@example.com",
      "contact": "9999999999"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#000000"
      
  }
};  
  getOrder(){
    this.checkout.getOrder().subscribe(data => {
    this.order=data;
    this.options.prefill.name=this.cust.customerName;
    this.options.prefill.email=this.cust.email;
    this.options.prefill.contact=this.cust.customerMobileNo;
    this.options.amount=this.order.amount;
    this.options.order_id=this.order.id;

this.rzp1 = new this.checkout.nativeWindow.Razorpay(this.options);
this.rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{
  this.toastr.warning(response.error.code)
  
  this.toastr.warning(response.error.description);
  var redirect_url = 'http://localhost:4200/failure';
  location.href = redirect_url;
});
    this.rzp1.open();
   

    })

  }
   
}
