import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { UserLoginDto } from './dto/userLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getUser(@Request() request: any){
        console.log(request)
    }

    @Post('/register')
    signUp(@Body() userRegisterDto: UserRegisterDto){
        return this.usersService.signUp(userRegisterDto);
    }

    @Put('/resetpass')
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto){
        return this.usersService.resetPassword(resetPasswordDto);
    }

}
