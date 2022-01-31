import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

    @Prop({ default: new Date()})
    createdAt: Date;

}

export const CommandSchema = SchemaFactory.createForClass(Command)