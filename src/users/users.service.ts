import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { User, UserDocument } from './users.schema';
import { UpdateUserDto } from './dto/updateuserDto';
import { compare } from 'bcrypt';
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

    async findUserById(id: ObjectId): Promise<User | undefined>{
        try{
            const user = await this.userModel.findById(id);
            delete user['password'];
            return user;
        }catch(e){
            throw new HttpException("Cet utilisateur n'existe pas", HttpStatus.BAD_REQUEST);
        }
        
    }

    createAuthentificationToken(id: string){
        return this.jwtService.sign({ id })
    }

    async signUp(userRegisterDto: UserRegisterDto) {
        
        const user = await this.findOneByEmail(userRegisterDto.email)

        if (user) {
          throw new HttpException('Cet utilisateur existe déjà', HttpStatus.BAD_REQUEST);
        }

        userRegisterDto.password = await bcrypt.hash(userRegisterDto.password, 10)

        const createdUser = new this.userModel(userRegisterDto);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }

    async resetPassword(resetPassword: ResetPasswordDto){
        const user = await this.findOneByEmail(resetPassword.email);
        try{
            const newPassword = await bcrypt.hash(resetPassword.newPassword, 10)
            const resp = await user.updateOne({password: newPassword})
            return {message: 'Mot de passe mis à jour', status: HttpStatus.CREATED}
        }catch(e){
            throw new HttpException("Cet utilisateur n'existe pas", HttpStatus.BAD_REQUEST);
        } 
    }

    // return user object without password
    sanitizeUser(user) {
        const sanitized = user.toObject();
        const token = this.createAuthentificationToken(user._id)
        return {user: sanitized, token};
    }

   async googleLogin(googleData){
        
            const user = await this.findOneByEmail(googleData.email)

            if (user) {
                return this.sanitizeUser(user);
            }

            const createdUser = new this.userModel(googleData);
            await createdUser.save();
            return this.sanitizeUser(createdUser);
    }

      /*update(id: ObjectId, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto);
      }*/

      async update(id: ObjectId, updateUserDto: UpdateUserDto) {
        /*
        {const user = await this.findOneByEmail(updateUserDto.email);
        const passwordMatchs = await compare(
            updateUserDto.password,
            user.password,
          );

          if (passwordMatchs) {
            throw new HttpException(
                ("le mot de passe entrer est le meme que le mot de passe existant"),
              HttpStatus.BAD_REQUEST,
            );
          }
        */
          updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
         // updateUserDto.password = await bcrypt.hash(String(updateUserDto.password),10,);
          const res = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
            new: true,
          });
      
          return this.sanitizeUser(res);

      }
    
      
  
     

    }
