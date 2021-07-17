import { AdminEntityDto } from './../EntityDtoModels/admin-entity-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Customer } from '../Models/customer';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getCustById():Observable<Customer>{
    
    return this.http.get<Customer>(`${baseUrl}customer/view/${sessionStorage.getItem("userId")}`);
  }
  addAdmin(admin:any):Observable<Object>
  {
    console.log(admin);
    return this.http.post<AdminEntityDto>(`${baseUrl}admin/add`,admin);
  }
}
