import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";
import { Product } from "src/products/product.schema";
import { User } from "src/users/users.schema";

export class CreateCommentDto{

    @IsNotEmpty()
    message: string;

    @Type(() => User)
    user_id: ObjectId;

    @Type(() => Product)
    product_id: ObjectId;

}