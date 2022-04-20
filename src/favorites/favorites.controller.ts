import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import AddFavoriteDto from './dto/addFavoriteDto';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {

    constructor(private favoriteService: FavoritesService){}

    @Post('add')
    addFavorite(@Body() addFavoriteDto: AddFavoriteDto){
        return this.favoriteService.addFavorite(addFavoriteDto)
    }

    @Get(':user_id')
    getFavoritesUser(@Param('user_id') user_id: ObjectId){
        return this.favoriteService.getFavoritesUser(user_id)
    }

}
