import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CommandService } from 'src/command/command.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating, RatingDocument } from './schemas/rating.schema';

@Injectable()
export class RatingService {

  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
    private commandService: CommandService
  ){}

  async create(createRatingDto: CreateRatingDto) {
    try{
      const commands = await this.commandService.getCommandProduct(createRatingDto.user,createRatingDto.product)
      const userRating = await this.ratingModel.findOne({user: createRatingDto.user, product: createRatingDto.product})
      console.log(userRating)
      if(commands.length != 0){
  
        if(!userRating){
          console.log('test1')
          return await new this.ratingModel(createRatingDto).save();
        }else{
          console.log('test2')
          return this.ratingModel
          .findByIdAndUpdate(userRating._id,createRatingDto)
          .setOptions({new: true})
        }
  
      }else{
        return {
          error: "Impossible de noter ce produit car tu ne l'as pas encore commandé"
        }
      }
    }catch{
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: "Impossible de noter ce produit car tu ne l'as pas encore commandé",
        }, HttpStatus.NOT_FOUND)
    }

  }

  findAll(user_id: ObjectId) {
    return this.ratingModel.find({user: user_id}).populate('product');
  }

  findOne(id: number) {
    return `This action returns a #${id} raiting`;
  }

  update(id: number, updateRaitingDto: UpdateRatingDto) {
    return `This action updates a #${id} raiting`;
  }

  remove(id: number) {
    return `This action removes a #${id} raiting`;
  }
}
