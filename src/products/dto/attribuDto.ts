import { IsArray } from "class-validator";


export class AttributDto {

    @IsArray()
    colors: string[];

    @IsArray()
    height: string[];

}