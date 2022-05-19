import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion, PromotionDocument } from './schemas/promotion.schema';

@Injectable()
export class PromotionService {

  constructor(
    @InjectModel(Promotion.name) private promotionModel: Model<PromotionDocument>
  ){}

  async create(createPromotionDto: CreatePromotionDto) {
    return await new this.promotionModel(createPromotionDto).save();
  }

  findAll() {
    return this.promotionModel.find();
  }

  findOne(id: ObjectId) {
    return this.promotionModel.findById(id);
  }

  update(id: ObjectId, updatePromotionDto: UpdatePromotionDto) {
    return this.promotionModel
    .findByIdAndUpdate(id, updatePromotionDto)
    .setOptions({new: true});
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
