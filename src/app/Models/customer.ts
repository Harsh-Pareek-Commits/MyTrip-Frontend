export class Customer {
    customerId: number;
    customerName: string;
    customerAddress: string;
    customerMobileNo: string;
    email: string;



    constructor(customerId: number,
        customerName: string,
        customerAddress: string,
        customerMobileNo: string,
        email: string,) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerMobileNo = customerMobileNo;
        this.email = email;

    }

}//end of class