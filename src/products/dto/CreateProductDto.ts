import { IsDefined, IsInt, IsNotEmpty, IsUrl, Length, Max, Min } from "class-validator";

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
    @Max(10000000)
    @IsDefined()
    @IsInt()
    price: number;

}