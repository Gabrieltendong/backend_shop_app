import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Product } from "src/products/product.schema";
import { Type } from "class-transformer";
import { User } from "src/users/users.schema";

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments{

    @Prop()
    message: string;

    @Prop({type: mongoose.Types.ObjectId, ref: Product.name})
    @Type(() => Product)
    product_id: Product;

    @Prop({type: mongoose.Types.ObjectId, ref: User.name})
    @Type(() => User)
    user_id: User;

    @Prop({ default: new Date()})
    createAt: Date;

}

export const CommentsSchema = SchemaFactory.createForClass(Comments);