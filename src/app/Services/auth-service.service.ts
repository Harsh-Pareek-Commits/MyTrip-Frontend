import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {
    
   }
  get isLoggedIn() {
    console.log("call came")
    if (!(sessionStorage.getItem('token'))) {
     return false;
      
    }
    else {
      return true;
    }
    }
  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}user/signin`, data);

  }
  logout() {
    this.loggedIn.next(false);

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');

  }
}
