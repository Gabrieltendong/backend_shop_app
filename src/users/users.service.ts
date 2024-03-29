import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { User, UserDocument } from './users.schema';
import { UpdateUserDto } from './dto/updateuserDto';
import { compare } from 'bcrypt';
import { UpdatePasswordDto } from './dto/updatePasswordDot';
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

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    const res = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    return this.sanitizeUser(res);
  }

  async updatePassword(id: ObjectId, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.userModel.findById(id)
    const isValidePassword = await bcrypt.compare(updatePasswordDto.lastPassword, user.password)
    if(isValidePassword){
      try{
        const newPassword = await bcrypt.hash(updatePasswordDto.newPassword, 10)
        const resp = await user.updateOne({password: newPassword})
        return {message: 'Mot de passe mis à jour', status: HttpStatus.CREATED}
      }catch(e){
          throw new HttpException("Cet utilisateur n'existe pas", HttpStatus.BAD_REQUEST);
      }
    }
    return {error: 'Mot de passe invalide', statut: 400}
  }

}
