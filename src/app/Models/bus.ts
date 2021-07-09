import { Travel } from './travel';
export class Bus{
   
	busId:number;
    busType:string;
    busNumber:string;
  	travel:Travel;

    constructor( busId:number,
        busType:string,
        busNumber:string,
       travel:Travel ){

            this.busId = busId;
            this.busType = busType;
            this.busNumber = busNumber;
            this.travel = travel;

    }
}