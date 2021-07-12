import { Travel } from './travel';
export class Bus{
   
	busId:number;
    busType:string;
    busNumber:string;
  	travel:Travel;
    capacity:number;

  constructor(
    busId: number, 
    busType: string, 
    busNumber: string, 
    travel: Travel, 
    capacity: number
) {
    this.busId = busId
    this.busType = busType
    this.busNumber = busNumber
    this.travel = travel
    this.capacity = capacity
  }
   
}