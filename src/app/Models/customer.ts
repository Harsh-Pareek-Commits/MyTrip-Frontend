export class Customer {
    customerId: number;
    customerName: string;
    customerAddress: string;
    customerMobileNo: string;
    customerEmail: string;



    constructor(customerId: number,
        customerName: string,
        customerAddress: string,
        customerMobileNo: string,
        customerEmail: string,) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerMobileNo = customerMobileNo;
        this.customerEmail = customerEmail;

    }

}//end of class