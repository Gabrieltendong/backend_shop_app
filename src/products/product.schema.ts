import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import * as mongoose from 'mongoose';
import { Category } from "src/category/category.schema";

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

    @Prop({ default: false})
    isActive: boolean;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Category.name})
    @Type(() => Category)
    category: Category;

    @Prop({ default: new Date()})
    createAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);