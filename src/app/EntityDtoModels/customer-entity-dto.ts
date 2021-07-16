export class CustomerEntityDto {
    userId:string;
    custName:string;
    custAddress:string;
    custMobileNo:number;
    userType:string;

  constructor(
    userId: string, 
    custName: string, 
    custAddress: string, 
    custMobileNo: number, 
    userType: string
) {
    this.userId = userId
    this.custName = custName
    this.custAddress = custAddress
    this.custMobileNo = custMobileNo
    this.userType = userType
  }


}
