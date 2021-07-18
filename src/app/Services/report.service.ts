import { baseUrl } from './../../environments/environment';
import { Report } from './../Models/report';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }
  addReport(report:any):Observable<Object>
  {
return this.http.post<Report>(`${baseUrl}report/add`,report);
  }
}
