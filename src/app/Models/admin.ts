export class Admin{

    adminName: string;
    adminEmail : string;
    adminMobile : string;

    constructor(adminName:string,adminEmail:string,
        adminMobile:string) {
           this.adminName= adminName;
           this.adminEmail= adminEmail;
           this.adminMobile = adminMobile;
}
}