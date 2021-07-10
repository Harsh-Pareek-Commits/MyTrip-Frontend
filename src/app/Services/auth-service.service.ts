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
  constructor(private http: HttpClient, private router: Router) { }
  get isLoggedIn() {

    return this.loggedIn.asObservable();
  }
  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}user/signin`, data);

  }
  logout() { // {4}
    this.loggedIn.next(false);
 
     sessionStorage.removeItem('token');
     sessionStorage.removeItem('userId');

  }
}
