import { Time } from "@angular/common";
import { Bus } from "../Models/bus";

export class RouteEntityDto {
    routeId:number;
    from:string;
    to:string;
    buses:Bus[];
    departureDate:Date;
    arrivalDate:Date;
    arrivalTime:Time;
    departureTime:Time;
    duration:string;
    pickupPoint:string;
    fareAmt:number;

  constructor(
    routeId: number, 
    from: string, 
    to: string, 
    buses: Bus[], 
    departureDate: Date, 
    arrivalDate: Date, 
    arrivalTime: Time, 
    departureTime: Time, 
    duration: string, 
    pickupPoint: string, 
    fareAmt: number
) {
    this.routeId = routeId
    this.from = from
    this.to = to
    this.buses = buses
    this.departureDate = departureDate
    this.arrivalDate = arrivalDate
    this.arrivalTime = arrivalTime
    this.departureTime = departureTime
    this.duration = duration
    this.pickupPoint = pickupPoint
    this.fareAmt = fareAmt
  }
      
}

