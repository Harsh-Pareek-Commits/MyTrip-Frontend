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
  viewTravel():Observable<Travel[]> {
    return this.http.get<Travel[]>(`${baseUrl}travel/all`);
  }
  deleteTravel(id:string):Observable<object>
  {
    return this.http.delete<object>(`${baseUrl}travel/delete/${id}`);
  }
  travelbyid(id:string):Observable<Travel>
  {
    return this.http.get<Travel>(`${baseUrl}travel/search/${id}`);
  }
}
