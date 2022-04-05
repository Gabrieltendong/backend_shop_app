import { ObjectId } from "mongoose";

export class DeleteProductCartDto{
    product: ObjectId;
    user_id: ObjectId;
}