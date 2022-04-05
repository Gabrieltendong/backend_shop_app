import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Product } from "src/products/product.schema";
import { Type } from "class-transformer";
import { User } from "src/users/users.schema";

export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Product.name})
    @Type(() => Product)
    product: Product;

    @Prop({type:  mongoose.Schema.Types.ObjectId, ref: User.name})
    @Type(() => User)
    user_id: User;

    @Prop({ default: 1})
    quantity: number;

    @Prop({ default: new Date()})
    createdAt: Date;

}

export const CartSchema = SchemaFactory.createForClass(Cart)