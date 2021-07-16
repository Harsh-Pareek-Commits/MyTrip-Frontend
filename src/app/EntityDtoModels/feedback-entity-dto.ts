export class FeedbackEntityDto {
    customer:string;
    feedbackInfo:string;
    feedbackRating:number;
    submitDate:string;

  constructor(
    customer: string, 
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
