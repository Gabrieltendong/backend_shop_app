import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { ShippingMethod, ShippingMethodSchema } from "src/shipping-method/schemas/shipping-method.schema";

export type CommandDocument = Command & Document;

@Schema()
export class Command{

    @Prop()
    user_id: string;

    @Prop()
    products: [Object];

    @Prop()
    address: string;

    @Prop({ type: Object })
    card: Object;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: ShippingMethod.name})
    @Type(() => ShippingMethod)
    shipping_method: ShippingMethod;

    @Prop({ default: new Date()})
    createdAt: Date;

}

export const CommandSchema = SchemaFactory.createForClass(Command)