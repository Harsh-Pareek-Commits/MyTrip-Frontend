import { Customer } from "./customer";

export class Feedback{
    feedbackId:number;
	customer:Customer;
	feedback:string;
	rating:number;
	submitDate:Date;

    constructor(feedbackId:number,
        customer:Customer,
        feedback:string,
        rating:number,
        submitDate:Date)
    {
        this.feedbackId = feedbackId;
		this.customer = customer;
		this.feedback = feedback;
		this.rating = rating;
		this.submitDate = submitDate;
	}
    }
