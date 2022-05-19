import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ShippingMethodDocument = ShippingMethod & Document;

@Schema()
export class ShippingMethod {

    @Prop({required: true, unique: true})
    designation: string

    @Prop({required: true})
    description: string;

    @Prop()
    price: number;

    @Prop({default: false})
    isActive: boolean;

    @Prop({default: new Date()})
    createdAt: Date;

}

export const ShippingMethodSchema = SchemaFactory.createForClass(ShippingMethod)
