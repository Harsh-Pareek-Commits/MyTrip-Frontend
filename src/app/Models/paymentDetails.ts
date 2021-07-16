export class PaymentDetails {
    paymentId:number;
    netAmount:string;
    paymentStatus:string;

  constructor(paymentId: number, netAmount: string, paymentStatus: string) {
    this.paymentId = paymentId
    this.netAmount = netAmount
    this.paymentStatus = paymentStatus
  }
   
}
