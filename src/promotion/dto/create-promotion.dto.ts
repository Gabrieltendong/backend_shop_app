import { IsBoolean, IsDateString, IsDefined, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class CreatePromotionDto {

    @IsNotEmpty()
    @IsDefined()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0)
    @Max(50)
    reduction: number;

    isActive: boolean;

}
