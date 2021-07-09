import { Bus } from './bus';
export class Route{
	routeId:number;
	routeFrom:string;
	routeTo:string;
	buses : Bus[];
	departureTime:Date;
	arrivalTime:Date;
	doj:Date;
	pickupPoint:string;
    fare:number;

    constructor(routeId:number,
        routeFrom:string,
        routeTo:string,
        buses : Bus[],
        departureTime:Date,
        arrivalTime:Date,
        doj:Date,
        pickupPoint:string,
        fare:number){

            this.routeId = routeId;
            this.routeFrom = routeFrom;
            this.routeTo = routeTo;
            this.buses = buses;
            this.departureTime = departureTime;
            this.arrivalTime = arrivalTime;
            this.doj = doj;
            this.pickupPoint =pickupPoint;
            this.fare = fare;
    }
}