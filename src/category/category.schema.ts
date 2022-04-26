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

    @Prop({default: false})
    isActive: boolean;


}

export const CategorySchema = SchemaFactory.createForClass(Category)