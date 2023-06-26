import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UpdatePasswordDto{

    @ApiProperty()
    lastPassword: string;

    @ApiProperty()
    newPassword: string;

}