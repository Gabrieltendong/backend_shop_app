import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserLoginDto{

    @ApiProperty()
    @IsEmail({},{
        message: "Le format de l'email est invalid"
    })
    email: string;

    @ApiProperty()
    @IsNotEmpty({
        message: "Le mot de passe ne doit pas être vide"
    })
    @Length(8, 100, {
        message: "Le mot de passe doit avoir au moins 8 caractères"
    })
    password: string;

}