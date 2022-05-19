import { IsDefined, IsInt, IsNotEmpty, Max, Min } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateRatingDto {

    @IsDefined()
    @IsNotEmpty()
    user: ObjectId

    @IsDefined()
    @IsNotEmpty()
    product: ObjectId

    @IsDefined()
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(5)
    note: number;

}
