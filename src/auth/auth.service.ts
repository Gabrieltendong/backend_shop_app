import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt'
import { UserLoginDto } from 'src/users/dto/userLoginDto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService){}

    async validateUser(userLoginDto: UserLoginDto): Promise<any> {
        const user = await this.usersService.findOneByEmail(userLoginDto.email);
        if (user && user.password === userLoginDto.password) {
          const { password, ...result } = user;
          return result;
        }
        return {error: 'mot de passe ou email incorrect'};
    }

    async auth(userLoginDto: UserLoginDto){

        const user = await this.usersService.findOneByEmail(userLoginDto.email);
        if(!user){
            throw new UnauthorizedException(`Cette utilisateur n'existe pas`)
        }
        
        const passwordMatchs = await compare(userLoginDto.password, user.password)
        if(!passwordMatchs){
            throw new UnauthorizedException('Mot de passe invalid')
        }

        return this.usersService.sanitizeUser(user);
    }

}
