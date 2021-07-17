import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Booking } from '../Models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }
  getBookings():Observable<Booking[]>{
    
    return this.http.get<Booking[]>(`${baseUrl}booking/customer/${localStorage.getItem('userId')}`);
  }
  getBooking(id:number):Observable<Booking>{
    
    return this.http.get<Booking>(`${baseUrl}booking/view/${id}`);
  }
  cancel(id:number):Observable<Booking>{
    
    return this.http.delete<Booking>(`${baseUrl}booking/delete/${id}`);
    
  }
}
