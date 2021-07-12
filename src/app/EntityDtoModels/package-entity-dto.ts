import { HotelEntityDto } from "./hotel-entity-dto";
import { RouteEntityDto } from "./route-entity-dto";

export class PackageEntityDto {
    packageId: number;
    packName: string;
    packDescription: string;
    packType: string;
    route: RouteEntityDto;
    hotel: HotelEntityDto[];
    packCost:number;

  constructor(
    packageId: number, 
    packName: string, 
    packDescription: string, 
    packType: string, 
    route: RouteEntityDto, 
    hotel: HotelEntityDto[], 
    packCost: number
) {
    this.packageId = packageId
    this.packName = packName
    this.packDescription = packDescription
    this.packType = packType
    this.route = route
    this.hotel = hotel
    this.packCost = packCost
  }
   
}
