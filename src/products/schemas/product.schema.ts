import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import * as mongoose from 'mongoose';
import { Category } from "src/category/category.schema";
import { Promotion } from "src/promotion/schemas/promotion.schema";
import { Rating } from "src/rating/schemas/rating.schema";
import { Attribut } from "./attribut.schema";

export type ProductDocument = Product & mongoose.Document;

@Schema({
    toJSON: {
        virtuals: true,
    }
})
export class Product{

    @Prop({ unique: true, required: true })
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    image: string[];

    @Prop({required: true})
    price: number;

    @Prop({ default: []})
    comments: string[];

    @Prop({ default: false})
    isActive: boolean;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Category.name})
    @Type(() => Category)
    category: Category;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Promotion.name})
    @Type(() => Promotion)
    promotion: Promotion;

    @Type(() => Rating)
    rating: Rating[];

    @Prop({type: Attribut})
    attributs: Attribut;

    @Prop({ default: new Date()})
    createAt: Date;

}

const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.virtual('rating', {
    ref: Rating.name,
    localField: '_id',
    foreignField: 'product'
})

export { ProductSchema }