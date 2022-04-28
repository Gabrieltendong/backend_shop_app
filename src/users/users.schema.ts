import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude } from "class-transformer";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User{

    @Prop({unique: true})
    email: string;

    @Prop()
    age: number;

    @Prop()
    @Exclude()
    password: string;

    @Prop()
    adress: string;

    @Prop({default: new Date()})
    createdAt: Date;

    @Prop({default: false})
    isGoogle: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User)