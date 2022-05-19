import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {

    @Prop()
    reduction: number

    @Prop({default: new Date()})
    createdAt: Date

    @Prop({default: true})
    isActive: boolean

}

export const PromotionSchema = SchemaFactory.createForClass(Promotion)
