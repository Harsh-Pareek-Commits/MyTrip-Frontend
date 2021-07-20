import { Travel } from './../Models/travel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Route } from '../Models/route';
import { RouteEntityDto } from '../EntityDtoModels/route-entity-dto';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }
  getRouteById(id:String):Observable<Route>{
    
    return this.http.get<Route>(`${baseUrl}route/view/${id}`);
  }
  getTravel():Observable<Travel[]> {
    return this.http.get<Travel[]>(`${baseUrl}travel/all`);
  }
  viewRoute():Observable<Route[]> {
    return this.http.get<Route[]>(`${baseUrl}route/all`);
  }
 
  deleteRoute(id:string):Observable<object>
  {
    return this.http.delete<object>(`${baseUrl}route/remove/${id}`);}
  addRoute(route:RouteEntityDto):Observable<Route>{
    return this.http.post<Route>(`${baseUrl}route/add`,route);
  }
}
