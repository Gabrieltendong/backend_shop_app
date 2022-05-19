import { IsDefined, IsNotEmpty, IsNumber, IsString, Length, Min } from "class-validator";

export class CreateShippingMethodDto {

    @IsDefined()
    @IsNotEmpty()
    @Length(20)
    @IsString()
    designation: string;

    @IsDefined()
    @IsNotEmpty()
    @Length(40)
    @IsString()
    description: string

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    isActive: boolean;

}
