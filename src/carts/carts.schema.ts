import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    
    @Prop()
    product_id: string;

    @Prop()
    user_id: string;

    @Prop({ default: 1})
    quantity: number;

    @Prop({ default: new Date()})
    createdAt: Date;

}

export const CartSchema = SchemaFactory.createForClass(Cart)