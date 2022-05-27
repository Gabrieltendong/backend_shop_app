import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateShippingMethodDto } from './dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping-method.dto';
import { ShippingMethod, ShippingMethodDocument } from './schemas/shipping-method.schema';

@Injectable()
export class ShippingMethodService {

  constructor(
    @InjectModel(ShippingMethod.name) private shippingMethodModel: Model<ShippingMethodDocument>
  ){}

  async create(createShippingMethodDto: CreateShippingMethodDto) {
    try{
      return await new this.shippingMethodModel(createShippingMethodDto).save();
    }catch{
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cette methode de livraison existe déja ',
      }, HttpStatus.FORBIDDEN)
    }
  }

  findAll() {
    return this.shippingMethodModel.find({isActive: true});
  }

  findOne(id: ObjectId) {
    return this.shippingMethodModel.findById(id);
  }

  async update(id: ObjectId, updateShippingMethodDto: UpdateShippingMethodDto) {
    return await this.shippingMethodModel
    .findOneAndUpdate(id, updateShippingMethodDto)
    .setOptions({new: true});
  }

  async remove(id: ObjectId) {
    const resp = await this.shippingMethodModel.findByIdAndRemove(id);
    if(!resp){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "Cette methode de livraison n'existe pas",
      }, HttpStatus.NOT_FOUND)
    }
    return {message: "suppression réussi"}
  }
}
