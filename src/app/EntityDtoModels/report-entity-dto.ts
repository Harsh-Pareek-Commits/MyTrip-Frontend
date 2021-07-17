import { BookingEntityDto } from "./booking-entity-dto";

export class ReportEntityDto {
    reportId:number;
    rptName:string;
    rptType:string;
    allbookings:BookingEntityDto[];

  constructor(
    reportId: number, 
    rptName: string, 
    rptType: string, 
    allbookings: BookingEntityDto[]
) {
    this.reportId = reportId
    this.rptName = rptName
    this.rptType = rptType
    this.allbookings = allbookings
  }

}
