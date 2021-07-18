import { CustomerEntityDto } from "./customer-entity-dto";

export class FeedbackEntityDto {
    customer:CustomerEntityDto;
    feedbackInfo:string;
    feedbackRating:number;
    submitDate:string;

  constructor(
    customer: CustomerEntityDto, 
    feedbackInfo: string, 
    feedbackRating: number, 
    submitDate: string
) {
    this.customer = customer
    this.feedbackInfo = feedbackInfo
    this.feedbackRating = feedbackRating
    this.submitDate = submitDate
  }

}
