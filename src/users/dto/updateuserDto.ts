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

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  addressFacturation: string;

  @ApiProperty()
  addressLivraison: string;


  @ApiProperty()
  adress: string;

  @ApiProperty()
  civility:string;
 

}
