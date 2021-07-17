export class CustomerEntityDto {
    userId:string;
    custName:string;
    custAddress:string;
    custMobileNo:number;
    userType:string;
    userEmail:string;
    password:string;

  constructor(
    userId: string, 
    custName: string, 
    custAddress: string, 
    custMobileNo: number, 
    userType: string, 
    userEmail: string, 
    password: string
) {
    this.userId = userId
    this.custName = custName
    this.custAddress = custAddress
    this.custMobileNo = custMobileNo
    this.userType = userType
    this.userEmail = userEmail
    this.password = password
  }
  

}
