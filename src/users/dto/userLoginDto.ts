import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserLoginDto{

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @Length(8)
    @ApiProperty()
    password: string;

}