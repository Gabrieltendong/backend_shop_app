import { IsDefined, IsInt, IsNotEmpty, IsUrl, Length, Min } from "class-validator";

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

    @Min(1)
    @IsDefined()
    @IsInt()
    price: number;

}