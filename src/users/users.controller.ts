import { Body, Controller, Get, Param, Post, Put, Req,Patch, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { UserLoginDto } from './dto/userLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';
import { UpdateUserDto } from './dto/updateuserDto';
import { UpdatePasswordDto } from './dto/updatePasswordDot';

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

    @Put('/resetpassword')
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto){
        return this.usersService.resetPassword(resetPasswordDto);
    }

    @Post('/auth/google')
    async googleAuth(@Body() googleData: any){
        return this.usersService.googleLogin(googleData)
    }

    @Get('/auth/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req){
        
    }


  
    @Patch(':id')
    update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Patch('/update_password/:id')
    updatePassword(@Param('id') id: ObjectId, @Body() updatePasswordDto: UpdatePasswordDto) {
        return this.usersService.updatePassword(id, updatePasswordDto);
    }

}
