import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ShippingMethodService } from './shipping-method.service';
import { CreateShippingMethodDto } from './dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping-method.dto';
import { ObjectId } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('shipping-method')
export class ShippingMethodController {

  constructor(private readonly shippingMethodService: ShippingMethodService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createShippingMethodDto: CreateShippingMethodDto) {
    return this.shippingMethodService.create(createShippingMethodDto);
  }

  @Get()
  findAll() {
    return this.shippingMethodService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: ObjectId) {
    return this.shippingMethodService.findOne(id);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: ObjectId, @Body() updateShippingMethodDto: UpdateShippingMethodDto) {
    return this.shippingMethodService.update(id, updateShippingMethodDto);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: ObjectId) {
    return this.shippingMethodService.remove(id);
  }
}
