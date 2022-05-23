import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDefined, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, IsUrl, Length, Max, Min } from "class-validator";
import { ObjectId } from "mongoose";
import { Promotion } from "src/promotion/schemas/promotion.schema";
import { Attribut } from "../schemas/attribut.schema";
import { AttributDto } from "./attribuDto";

export class CreateProductDto{

    @IsDefined()
    @IsNotEmpty()
    @Length(20)
    name: string;

    @IsDefined()
    @Length(100)
    description: string;

    @IsDefined()
    @IsArray()
    @ArrayMinSize(3)
    image: string[];

    @Min(0)
    @IsDefined()
    @IsNumber({maxDecimalPlaces: 2})
    price: number;

    @IsDefined()
    @IsNotEmpty()
    category: ObjectId

    @Type(() => AttributDto)
    attributs: AttributDto;

    @Type(() => Promotion)
    promotion: ObjectId;

}