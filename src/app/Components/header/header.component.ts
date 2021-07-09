import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faBus,faHotel  } from '@fortawesome/free-solid-svg-icons';
import { Router }  from "@angular/router";
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(3000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined; 
faBus=faBus;
faHotel=faHotel;
token:any='';
  constructor(public router: Router,private authService: AuthServiceService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout(){
    this.toastr.success ('Logout Success');
    this.authService.logout(); 
    }

}
