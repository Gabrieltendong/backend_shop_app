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
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  lastname: string;


  @ApiProperty()
  @IsDefined()
  @IsInt()
  @Min(6)
  age: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsDefined()
  
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  adress: string;
  
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  gender: string;

  

 

}
