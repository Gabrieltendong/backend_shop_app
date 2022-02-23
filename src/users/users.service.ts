import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { User, UserDocument } from './users.schema';
var bcrypt = require('bcrypt')

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ){}

    async findOneByEmail(email: string){
        return this.userModel.findOne({ email });
    }

    async findUserById(id: string): Promise<User | undefined>{
        const user = await this.userModel.findOne({ _id: id });
        delete user['password'];
        return user;
    }

    createAuthentificationToken(id: string){
        return this.jwtService.sign({ id })
    }

    async signUp(userRegisterDto: UserRegisterDto) {
        
        const user = await this.findOneByEmail(userRegisterDto.email)

        if (user) {
          throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }

        userRegisterDto.password = await bcrypt.hash(userRegisterDto.password, 10)

        const createdUser = new this.userModel(userRegisterDto);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }

    async resetPassword(resetPassword: ResetPasswordDto){
        const user = await this.findOneByEmail(resetPassword.email);
        try{
            user.updateOne({password: resetPassword.newPassword})
            return {message: 'Mot de passe mis a jour', status: HttpStatus.CREATED}
        }catch(e){
            throw new HttpException("Cette utilisateur n'existe pas", HttpStatus.BAD_REQUEST);
        } 
    }
   // return user object without password
    sanitizeUser(user) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        const token = this.createAuthentificationToken(user._id)
        return {user: sanitized, token};
    }

}
