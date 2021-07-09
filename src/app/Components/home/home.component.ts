import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Component, OnInit } from '@angular/core';
import { faBus,faHotel,faUserFriends  } from '@fortawesome/free-solid-svg-icons';
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
  constructor() { }

  ngOnInit(): void {
  }

}
