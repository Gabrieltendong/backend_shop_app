import { IsDateString, IsDefined, IsNotEmpty, IsNumber, IsString, Length, Max, MaxLength, Min } from "class-validator";

export class CreatePromoCodeDto {

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    @Length(6, 6)
    code: string

    @IsNotEmpty()
    @IsDefined()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    @Max(10)
    reduction: number

    @IsNotEmpty()
    @IsDefined()
    @IsDateString()
    expired_date: Date;

}
