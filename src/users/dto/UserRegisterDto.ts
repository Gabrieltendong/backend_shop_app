import { ApiProperty } from "@nestjs/swagger";
import { Min } from "class-validator";
import { UserLoginDto } from "./userLoginDto";

export class UserRegisterDto extends UserLoginDto{

    @ApiProperty()
    adress: string;

    @Min(10)
    @ApiProperty()
    age: number;
}