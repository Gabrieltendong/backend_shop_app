import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePromoCodeDto } from './dto/create-promo_code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo_code.dto';
import { PromoCode, PromoCodeDocument } from './schemas/promo_code.schema';

@Injectable()
export class PromoCodeService {

  constructor(
    @InjectModel(PromoCode.name) private promoCodeModel: Model<PromoCodeDocument>
  ){}

  async create(createPromoCodeDto: CreatePromoCodeDto) {
    return await new this.promoCodeModel(createPromoCodeDto).save();
  }

  findAll() {
    return this.promoCodeModel.find();
  }

  findOne(code: string) {
    return this.promoCodeModel.findOne({code});
  }

}
