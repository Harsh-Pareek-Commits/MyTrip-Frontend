export class PaymentDetailsEntityDto {
    paymentId:number;
    paymentMode:string;
   
    netAmount:string;
    paymentStatus:string;
    userId:string;

  constructor(
    paymentId: number, 
    paymentMode: string, 
  
    netAmount: string, 
    paymentStatus: string, 
    userId: string
) {
    this.paymentId = paymentId
    this.paymentMode = paymentMode
 
    this.netAmount = netAmount
    this.paymentStatus = paymentStatus
    this.userId = userId
  }

}
