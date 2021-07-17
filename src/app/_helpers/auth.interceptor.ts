import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('userId')) {
      console.log("Interceptor called with " + sessionStorage.getItem('token'));
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token')) })
    }

    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
