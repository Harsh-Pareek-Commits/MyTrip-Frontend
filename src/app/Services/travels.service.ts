import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { TravelEntityDto } from '../EntityDtoModels/travel-entity-dto';
import { Travel } from '../Models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private http:HttpClient) { }
  addTravels(travel:any):Observable<Object>
  {
return this.http.post<TravelEntityDto>(`${baseUrl}travel/add`,travel);
  }
}
