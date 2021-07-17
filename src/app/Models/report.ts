import { Booking } from "./booking";

export class Report {
     reportId:number;
	 reportName:string;
	reportType:string; 
	 allBookings:Booking[];

  constructor(
    reportId: number, 
    reportName: string, 
    reportType: string, 
    allBookings: Booking[]
) {
    this.reportId = reportId
    this.reportName = reportName
    this.reportType = reportType
    this.allBookings = allBookings
  }

}
