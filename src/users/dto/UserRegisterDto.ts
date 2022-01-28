import { ApiProperty } from "@nestjs/swagger";
import { UserLoginDto } from "./userLoginDto";

export class UserRegisterDto extends UserLoginDto{

    @ApiProperty()
    adress: string;

    @ApiProperty()
    age: number;
}