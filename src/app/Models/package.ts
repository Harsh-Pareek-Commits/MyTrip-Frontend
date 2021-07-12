import { Route } from "./route";
import { Hotel } from "./hotel";
export class Package{
    
    packageId: number;
	packageName: string;
    packageDescription: string;
	packageType: string;
	packageCost: number;
    route: Route;
    hotel: Hotel[];

    constructor( packageId: number,
        packageName: string,
        packageDescription: string,
        packageType: string,
        packageCost: number,
        route: Route,
        hotel: Hotel[]){

            this.packageId =packageId;
            this.packageName = packageName;
            this.packageType = packageType;
            this.packageDescription = packageDescription;
            this.packageCost = packageCost;
            this.route = route;
            this.hotel = hotel;
    }
}