import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from "moment";
import { CreatePromoCodeDto } from './dto/create-promo_code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo_code.dto';
import { PromoCode, PromoCodeDocument } from './schemas/promo_code.schema';

@Injectable()
export class PromoCodeService {

  constructor(
    @InjectModel(PromoCode.name) private promoCodeModel: Model<PromoCodeDocument>
  ){}

  async create(createPromoCodeDto: CreatePromoCodeDto) {
    const newDate = moment(new Date()).format('YYYY-MM-DD')
    const {expired_date} = createPromoCodeDto
    if(moment(newDate) >= moment(expired_date)){
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Vous ne pouvez pas créer un code promo a cette date',
      }, HttpStatus.FORBIDDEN)
    }
    return await new this.promoCodeModel(createPromoCodeDto).save();
  }

  findAll() {
    return this.promoCodeModel.find();
  }

  findOne(code: string) {
    return this.promoCodeModel.findOne({code});
  }

}
