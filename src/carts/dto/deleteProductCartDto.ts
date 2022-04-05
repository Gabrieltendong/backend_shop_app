import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class DeleteProductCartDto{
    @IsNotEmpty()
    product: ObjectId;

    @IsNotEmpty()
    user_id: ObjectId;
}