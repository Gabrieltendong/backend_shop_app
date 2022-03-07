import { Type } from "class-transformer";
import { ObjectId } from "mongoose";
import { Product } from "src/products/product.schema";

export class AddProductCartDto{
    @Type(() => Product)
    product: ObjectId;
    user_id: string;
    quantity: number;
}