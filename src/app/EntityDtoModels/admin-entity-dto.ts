export class AdminEntityDto {
    name:string;
    adminMobile:number;

  constructor(name: string, adminMobile: number) {
    this.name = name
    this.adminMobile = adminMobile
  }

}
