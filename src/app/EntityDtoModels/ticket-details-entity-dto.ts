export class TicketDetailsEntityDto {
        ticketId:number
         status:string;
    
      constructor(ticketId: number, status: string) {
        this.ticketId = ticketId
        this.status = status
      }
       
    
    
}
