import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class Order {
    amount: number;
    amount_due: number;
    amount_paid: number;
    attempts: number;
    created_at: String;
    currency: string;
    entity: string;
    id: string;
    offer_id: string;
    receipt: string;
    status: string;
    constructor(amount: number,
        amount_due: number,
        amount_paid: number,
        attempts: number,
        created_at: String,
        currency: string,
        entity: string,
        id: string,
        offer_id: string,
        receipt: string,
        status: string) {

        this.amount = amount;
        this.amount_due = amount_due;
        this.amount_paid = amount_paid;
        this.attempts = attempts;
        this.created_at = created_at;
        this.currency = currency;
        this.entity = entity;
        this.id = id;
        this.offer_id = offer_id;
        this.receipt = receipt;
        this.status = status;
    }
    
}
