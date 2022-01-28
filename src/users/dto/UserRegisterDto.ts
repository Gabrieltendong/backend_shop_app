import { UserLoginDto } from "./userLoginDto";

export class UserRegisterDto extends UserLoginDto{
    adress: string;
    age: number;
}