import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category{

    @Prop({unique: true})
    name: string;

    @Prop()
    description: string;

    @Prop({default: new Date()})
    createdAt: Date;

}

export const CategorySchema = SchemaFactory.createForClass(Category)