import { IsDefined, IsEnum, IsInt, IsNotEmpty, IsNumber, IsUrl, Length, Max, Min } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateProductDto{

    @IsDefined()
    @IsNotEmpty()
    @Length(20)
    name: string;

    @IsDefined()
    @Length(100)
    description: string;

    @IsDefined()
    @IsUrl()
    image: string;

    @Min(0)
    @IsDefined()
    @IsNumber({maxDecimalPlaces: 2})
    price: number;

    @IsDefined()
    @IsNotEmpty()
    category: ObjectId

}