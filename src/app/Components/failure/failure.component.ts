import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {

 
  token: any = '';

  constructor(public router: Router, private authService: AuthServiceService, private toastr: ToastrService) { }

    ngOnInit(): void {
   
    
  }
  
  onLogout() {
    this.toastr.success('Logout Success');
    this.authService.logout();
  }
}
