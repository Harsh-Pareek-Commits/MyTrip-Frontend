import { Package } from "./package";
import { PaymentDetails } from "./payment-details";
import { TicketDetails } from "./ticket-details";

export class Booking{
    bookingId: number;
    bookingType: string;
    bookingDescription:string;
    bookingTitle:string;
    bookingDate: Date;
    pack :Package;
	userId: number;
    payment: PaymentDetails;
	ticket: TicketDetails;

    constructor(bookingId: number,
        bookingType: string,
        bookingDescription:string,
        bookingTitle:string,
        bookingDate: Date,
        pack :Package,
        userId: number,
        payment: PaymentDetails,
        ticket: TicketDetails){
        this.bookingId = bookingId;
		this.bookingType = bookingType;
		this.bookingDescription = bookingDescription;
		this.bookingTitle = bookingTitle;
		this.bookingDate = bookingDate;
		this.pack = pack;
		this.userId = userId;
		this.payment = payment;
		this.ticket = ticket;

    }


}