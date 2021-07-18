import { baseUrl } from './../../environments/environment';
import { HotelEntityDto } from './../EntityDtoModels/hotel-entity-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../Models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  addHotel(hotel:any):Observable<Object>
  {
return this.http.post<Hotel>(`${baseUrl}hotel/add`,hotel);
  }
  viewHotel():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${baseUrl}hotel/view`);
  }
  deleteHotel(id:string):Observable<object>
  {
    return this.http.delete<object>(`${baseUrl}hotel/delete/${id}`);
  }
   getHotel(id:number):Observable<HotelEntityDto>
  {
    return this.http.get<HotelEntityDto>(`${baseUrl}hotel/search/${id}`);
  }
}
