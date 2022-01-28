import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserLoginDto{

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8)
    password: string;

}