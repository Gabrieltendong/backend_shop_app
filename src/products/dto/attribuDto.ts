import { ArrayMinSize, IsArray, IsDefined, IsNotEmpty, MinLength } from "class-validator";


export class AttributDto {

    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    @ArrayMinSize(1)
    colors: string[];

    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    @ArrayMinSize(1)
    height: string[];

}