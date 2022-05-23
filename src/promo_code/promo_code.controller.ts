import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PromoCodeService } from './promo_code.service';
import { CreatePromoCodeDto } from './dto/create-promo_code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo_code.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('promo-code')
export class PromoCodeController {
  constructor(private readonly promoCodeService: PromoCodeService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPromoCodeDto: CreatePromoCodeDto) {
    return this.promoCodeService.create(createPromoCodeDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.promoCodeService.findAll();
  }

  @Get(':code')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('code') code: string) {
    return this.promoCodeService.findOne(code);
  }

}
