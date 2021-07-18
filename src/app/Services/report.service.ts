import { baseUrl } from './../../environments/environment';
import { Report } from './../Models/report';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportEntityDto } from '../EntityDtoModels/report-entity-dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }
  addReport(report:ReportEntityDto):Observable<Object>
  {
    return this.http.post<Report>(`${baseUrl}report/add`,report);
  }
  viewReport():Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}report/all`);
  }
}
