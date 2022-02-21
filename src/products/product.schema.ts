import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product{

    @Prop({ unique: true, required: true })
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    image: string;

    @Prop({required: true})
    price: string;

    @Prop({ default: []})
    comments: [string];

    @Prop({ default: new Date()})
    createAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);