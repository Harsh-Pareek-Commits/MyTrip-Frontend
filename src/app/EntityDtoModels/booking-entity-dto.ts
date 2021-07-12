import { PaymentDetails } from "../Models/paymentDetails";
import { TicketDetails } from "../Models/ticketDetails";
import { PackageEntityDto } from "./package-entity-dto";

export class BookingEntityDto {
    bookingId: number;
    bookType: string;
    bookDescription:string;
    bookTitle:string;
    dateofBooking: string;
    packDetails :PackageEntityDto;
	userId: string;
    paymentDetails: PaymentDetails;
	ticketDetails: TicketDetails;

    constructor(bookingId: number,
        bookingType: string,
        bookingDescription:string,
        bookingTitle:string,
        bookingDate: string,
        pack :PackageEntityDto,
        userId: string,
        payment: PaymentDetails,
        ticket: TicketDetails){
        this.bookingId = bookingId;
		this.bookType = bookingType;
		this.bookDescription = bookingDescription;
		this.bookTitle = bookingTitle;
		this.dateofBooking = bookingDate;
		this.packDetails = pack;
		this.userId = userId;
		this.paymentDetails = payment;
		this.ticketDetails = ticket;

    }
}
