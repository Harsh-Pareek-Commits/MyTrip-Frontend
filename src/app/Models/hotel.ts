export class Hotel {
    hotelId: number;
    hotelName: string;
    hotelType: string;
    hotelDescription: string;
    address: string;
    rent: number;
    status: string;
    city: string;
    constructor(hotelId: number,
        hotelName: string,
        hotelType: string,
        hotelDescription: string,
        address: string,
        rent: number,
        status: string,
        city: string) {

        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.hotelType = hotelType;
        this.hotelDescription = hotelDescription;
        this.address = address;
        this.rent = rent;
        this.status = status;
        this.city = city;
    }
}
