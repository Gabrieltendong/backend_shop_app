import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product{

    @Prop({ unique: true, required: true })
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    image: string;

    @Prop({required: true})
    price: number;

    @Prop({ default: []})
    comments: string[];

    @Prop({ default: new Date()})
    createAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);