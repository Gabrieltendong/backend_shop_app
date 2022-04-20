import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import AddFavoriteDto from './dto/addFavoriteDto';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {

    constructor(private favoriteService: FavoritesService){}

    @Post('add')
    @UseGuards(AuthGuard('jwt'))
    addFavorite(@Body() addFavoriteDto: AddFavoriteDto){
        return this.favoriteService.addFavorite(addFavoriteDto)
    }

    @Get(':user_id')
    @UseGuards(AuthGuard('jwt'))
    getFavoritesUser(@Param('user_id') user_id: ObjectId){
        return this.favoriteService.getFavoritesUser(user_id)
    }

}
