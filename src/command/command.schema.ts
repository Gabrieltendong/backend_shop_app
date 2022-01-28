import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommandDocument = Command & Document;

@Schema()
export class Command{

    @Prop()
    user_id: string;

    @Prop()
    products: [string];

    @Prop()
    address: string;

    @Prop()
    credit_card: number;

    @Prop({ default: new Date()})
    createdAt: Date;

}

export const CommandSchema = SchemaFactory.createForClass(Command)