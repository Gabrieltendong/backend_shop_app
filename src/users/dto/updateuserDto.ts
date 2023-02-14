import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsEnum,
  IsInt,
  IsLowercase,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';


export class UpdateUserDto {
  @ApiProperty()
  firstname: string;

  /*@ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;*/

  @ApiProperty()
  lastname: string;


  // @ApiProperty()
  // @IsDefined()
  // @IsNotEmpty()
  // @IsInt()
  // age: number;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  password: string;


  /*@ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  pseudo: string;*/

  @ApiProperty()
  addressFacturation: string;

  @ApiProperty()
  addressLivraison: string;


  @ApiProperty()
  adress: string;
  
  @ApiProperty()
  gender: string;

  @ApiProperty()
  civility:string;
  

 

}
