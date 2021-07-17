import { baseUrl } from './../../environments/environment';
import { HotelEntityDto } from './../EntityDtoModels/hotel-entity-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  addHotel(hotel:any):Observable<Object>
  {
return this.http.post<HotelEntityDto>(`${baseUrl}hotel/add`,hotel);
  }
}
