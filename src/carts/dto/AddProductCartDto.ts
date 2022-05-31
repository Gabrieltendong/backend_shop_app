import { Type } from "class-transformer";
import { IsNotEmpty, Min } from "class-validator";
import { ObjectId } from "mongoose";
import { Product } from "src/products/schemas/product.schema";

export class AddProductCartDto{

    @Type(() => Product)
    @IsNotEmpty()
    product: ObjectId;

    @IsNotEmpty()
    user_id: ObjectId;

    @Min(1)
    quantity: number;

    promo_code: string;
}