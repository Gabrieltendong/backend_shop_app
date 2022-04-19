import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";
import { UserLoginDto } from "./userLoginDto";

export class UserRegisterDto extends UserLoginDto{

    @ApiProperty()
    adress: string;

    @ApiProperty()
    @IsInt()
    @Prop({default: 18})
    age: number;
}