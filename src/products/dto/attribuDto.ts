import { IsArray, IsDefined, IsNotEmpty, MinLength } from "class-validator";


export class AttributDto {

    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    @MinLength(1)
    colors: string[];

    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    @MinLength(1)
    height: string[];

}