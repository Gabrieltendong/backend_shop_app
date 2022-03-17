import { ObjectId } from "mongoose";

export class CreateCommandDto{

    user_id: ObjectId;

    address: string;

    card: {
        number: number,
        exp_month: number,
        exp_year: number,
        cvc: string
    };
}