import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Attribut{

    @Prop()
    colors: string[];

    @Prop()
    height: string[];

}