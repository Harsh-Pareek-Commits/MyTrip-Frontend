import { Time } from '@angular/common';
import { Bus } from './bus';
export class Route{
	routeId:number;
	from:string;
	to:string;
	buses : Bus[];
	departureTime:Time;
	arrivalTime:Time;
    departureDate:Date;
	arrivalDate:Date;
	duration:string;
	pickupPoint:string;
    fare:number;

    constructor(routeId:number,
        routeFrom:string,
        routeTo:string,
        buses : Bus[],
        departureTime:Time,
        arrivalTime:Time,
        departureDate:Date,
        arrivalDate:Date,
        duration:string,
        pickupPoint:string,
        fare:number){

            this.routeId = routeId;
            this.from = routeFrom;
            this.to = routeTo;
            this.buses = buses;
            this.departureTime = departureTime;
            this.arrivalTime = arrivalTime;
            this.departureDate = departureDate;
            this.arrivalDate = arrivalDate;
            this.duration = duration;
            this.pickupPoint =pickupPoint;
            this.fare = fare;
    }
}