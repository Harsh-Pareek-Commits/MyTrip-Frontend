export class Travel {
    travelsId:number;
    travelsName:string;
    agentName:string;
    address:string ;
    contact:string;
    constructor(travelsId:number,
        travelsName:string,
        agentName:string,
        address:string,
        contact:string){
            this.travelsId=travelsId;
            this.travelsName=travelsName;
            this.agentName=agentName;
            this.address=address;
            this.contact=contact;

        }
}
