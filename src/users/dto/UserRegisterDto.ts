import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";
import { UserLoginDto } from "./userLoginDto";

export class UserRegisterDto extends UserLoginDto{

    @ApiProperty()
    adress: string;

    @ApiProperty()
    @IsInt()
    age: number;
}