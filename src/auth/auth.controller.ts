import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'src/users/dto/userLoginDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() userLoginDto: UserLoginDto){
        return this.authService.auth(userLoginDto)
    }

}
