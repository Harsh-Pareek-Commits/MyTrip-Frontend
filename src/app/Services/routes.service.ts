import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Route } from '../Models/route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }
  getRouteById(id:String){
    
    return this.http.get<Route>(`${baseUrl}route/view/${id}`);
  }
}
