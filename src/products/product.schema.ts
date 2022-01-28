import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product{

    @Prop({ unique: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    price: string;

    @Prop({ default: []})
    comments: [string];

    @Prop({ default: new Date()})
    createAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);