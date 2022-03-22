import { Type } from "class-transformer";
import { Min } from "class-validator";
import { ObjectId } from "mongoose";
import { Product } from "src/products/product.schema";

export class AddProductCartDto{

    @Type(() => Product)
    product: ObjectId;

    user_id: ObjectId;

    @Min(1)
    quantity: number;
}