import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PromoCodeDocument = PromoCode & Document;

@Schema()
export class PromoCode {

    @Prop({unique: true})
    code: string;

    @Prop()
    reduction: number;

    @Prop({ default: new Date()})
    createdAt: Date;

    @Prop()
    expired_date: Date;

}

export const PromoCodeSchema = SchemaFactory.createForClass(PromoCode)
