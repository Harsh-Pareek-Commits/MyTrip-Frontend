import { AdminEntityDto } from './../EntityDtoModels/admin-entity-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Customer } from '../Models/customer';
import { Admin } from '../Models/admin';
import { CustomerEntityDto } from '../EntityDtoModels/customer-entity-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getCustById():Observable<Customer>{
    
    return this.http.get<Customer>(`${baseUrl}customer/view/${sessionStorage.getItem("userId")}`);
  }
  updatedCusstomer(cust:CustomerEntityDto):Observable<Customer>{
    return this.http.put<Customer>(`${baseUrl}customer/update/`,cust);
  }
  addAdmin(admin:any):Observable<Object>
  {
    console.log(admin);
    return this.http.post<Admin>(`${baseUrl}admin/add`,admin);
  }
  viewCustomer():Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}customer/view`);
  }
  addcustomer(customer:any):Observable<Customer>
  {
    console.log(customer);
    return this.http.post<Customer>(`${baseUrl}customer/add`,customer);
  }
}
