export class AdminEntityDto {
    userId:number;
    userEmail:string;
    password:string;
    name:string;
    adminMobile:number;

  constructor(
    userId: number, 
    userEmail: string, 
    password: string, 
    name: string, 
    adminMobile: number
) {
    this.userId = userId
    this.userEmail = userEmail
    this.password = password
    this.name = name
    this.adminMobile = adminMobile
  }
  
}
