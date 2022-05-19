import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ObjectId } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('rating')
export class RatingController {
  constructor(private readonly raitingService: RatingService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createRaitingDto: CreateRatingDto) {
    return this.raitingService.create(createRaitingDto);
  }

  @Get(':user_id')
  @UseGuards(AuthGuard('jwt'))
  findAll(@Param('user_id') user_id: ObjectId) {
    return this.raitingService.findAll(user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raitingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaitingDto: UpdateRatingDto) {
    return this.raitingService.update(+id, updateRaitingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raitingService.remove(+id);
  }
}
