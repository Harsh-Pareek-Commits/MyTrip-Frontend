import { Component, OnInit } from '@angular/core';
import {faBus,faHotel} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  faBus=faBus;
  faHotel=faHotel;
  constructor() { }

  ngOnInit(): void {
  }

}
