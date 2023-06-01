import { Type } from "class-transformer";
import { IsDefined, IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";
import { ShippingMethod } from "src/shipping-method/schemas/shipping-method.schema";

export class CreateCommandDto{

    @IsNotEmpty()
    @IsDefined()
    user_id: ObjectId;

    @IsNotEmpty()
    @IsDefined()
    address: string;

    @IsNotEmpty()
    @IsDefined()
    card: {
        number: number,
        exp_month: number,
        exp_year: number,
        cvc: string
    };

    @IsNotEmpty()
    @IsDefined()
    products: any[]

    @IsNotEmpty()
    @IsDefined()
    shipping_method: ObjectId;
    
}