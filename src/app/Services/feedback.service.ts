import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Feedback } from './../Models/feedback';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackEntityDto } from '../EntityDtoModels/feedback-entity-dto';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  viewFeedback():Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${baseUrl}feedback/find`);
  }
  addfeedback(feedback:FeedbackEntityDto):Observable<Feedback>
  {
    return this.http.post<Feedback>(`${baseUrl}feedback/add`,feedback);
  }
}
