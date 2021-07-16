import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getCustById():Observable<Customer>{
    
    return this.http.get<Customer>(`${baseUrl}customer/view/${sessionStorage.getItem("userId")}`);
  }
}
