import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments{

    @Prop()
    message: string;

    @Prop()
    product_id: string;

    @Prop()
    user_id: string;

    @Prop({ default: new Date()})
    createAt: Date;

}

export const CommentsSchema = SchemaFactory.createForClass(Comments);