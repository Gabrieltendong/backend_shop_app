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
    firstname: string;

    @Prop()
    lastname: string;

   /* @Prop()
    pseudo: string;*/

    @Prop()
    phone: number;

    @Prop()
    @Exclude()
    password: string;

    @Prop()
    adress: string;

    @Prop()
    addressFacturation: string;

    @Prop()
    addressLivraison: string;

    @Prop()
    civility:string;

    @Prop()
    gender: string;

    @Prop({default: new Date()})
    createdAt: Date;

    @Prop({default: false})
    isGoogle: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User)