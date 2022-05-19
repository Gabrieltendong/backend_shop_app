import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import * as mongoose from 'mongoose'
import { Product } from "src/products/schemas/product.schema";
import { User } from "src/users/users.schema";

export type RatingDocument = Rating & mongoose.Document;

@Schema()
export class Rating {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
    @Type(() => User)
    user: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Product'})
    @Type(() => Product)
    product: Product;

    @Prop()
    note: number;

    @Prop({default: new Date()})
    createdAt: Date;

}

export const RatingSchema = SchemaFactory.createForClass(Rating);
