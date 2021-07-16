export class TravelEntityDto {
    travelsId:number;
    travelsName:string;
    agentName:string;
    agentsAddress:string;
    agentsContact:string;

  constructor(
    travelsId: number, 
    travelsName: string, 
    agentName: string, 
    agentsAddress: string, 
    agentsContact: string
) {
    this.travelsId = travelsId
    this.travelsName = travelsName
    this.agentName = agentName
    this.agentsAddress = agentsAddress
    this.agentsContact = agentsContact
  }

}
