import { Package } from "./package";
import { PaymentDetails } from "./paymentDetails";
import { TicketDetails } from "./ticketDetails";

export class Booking{
    bookingId: number;
    bookingType: string;
    description:string;
    bookingTitle:string;
    bookingDate: string;
    pack :Package;
	userId: string;
    payment: PaymentDetails;
	ticket: TicketDetails;

  constructor(
    bookingId: number, 
    bookingType: string, 
    description: string, 
    bookingTitle: string, 
    bookingDate: string, 
    pack: Package, 
    userId: string, 
    payment: PaymentDetails, 
    ticket: TicketDetails
) {
    this.bookingId = bookingId
    this.bookingType = bookingType
    this.description = description
    this.bookingTitle = bookingTitle
    this.bookingDate = bookingDate
    this.pack = pack
    this.userId = userId
    this.payment = payment
    this.ticket = ticket
  }


}