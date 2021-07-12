import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { BookingEntityDto } from '../EntityDtoModels/booking-entity-dto';
import { Booking } from '../Models/booking';
import { Order } from '../Models/order';
function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  get nativeWindow() : any {
    return _window();
 }
  constructor(private http:HttpClient) { }
  order!:Order
 getOrder():Observable<Order>{
    
    return this.http.get<Order>(`${baseUrl}checkout/${localStorage.getItem('type')}/${localStorage.getItem('productId')}`);
  }
  
  createBookings(booking:BookingEntityDto):Observable<Object>
  {
    console.log(booking);
    return this.http.post<BookingEntityDto>(`${baseUrl}booking/add`,booking);
  }
}
