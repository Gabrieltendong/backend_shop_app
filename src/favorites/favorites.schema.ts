import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import * as mongoose from 'mongoose';
import { User } from "src/users/users.schema";
import { Product } from "src/products/product.schema"

export type FavoritesDocument = Favorites & mongoose.Document

@Schema()
export class Favorites{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
    @Type(() => User)
    user: User

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Product.name})
    @Type(() => Product)
    product: Product

}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites)