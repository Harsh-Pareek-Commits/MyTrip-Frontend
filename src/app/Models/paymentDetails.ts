export class PaymentDetails {
    paymentMode:string;
    bankName:string;
    cardNo: string;
    paymentStatus: string;
    userId: string;
    constructor(paymentMode:string,
    bankName:string ,
    cardNo: string,
    paymentStatus: string,
    userId: string){
     this.userId=userId;
     this.bankName=bankName;
     this.cardNo=cardNo;
     this.paymentStatus=paymentStatus
     this.paymentMode=paymentMode
    }
}
