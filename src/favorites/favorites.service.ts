import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import AddFavoriteDto from './dto/addFavoriteDto';
import { Favorites, FavoritesDocument } from './favorites.schema';

@Injectable()
export class FavoritesService {

    constructor(
        @InjectModel(Favorites.name) private favoriteModel: Model<FavoritesDocument>
    ){}

    async addFavorite(addFavoriteDto: AddFavoriteDto){
        const favorite = await this.favoriteModel.findOne(addFavoriteDto)
        if(favorite){
            const remove = await this.favoriteModel.findByIdAndRemove(favorite._id)
            return {message: "Vous avez supprimé ce produit de vos favoris"}
        }else{
            try{
                const newFavorite = new this.favoriteModel(addFavoriteDto)
                await newFavorite.save();
                return newFavorite;
            }catch{
                throw new HttpException({
                    status: HttpStatus.BAD_REQUEST,
                    error: "Verifiez vos informations"
                }, HttpStatus.BAD_REQUEST)
            }
        } 
    }

    getFavoritesUser(user_id){
        return this.favoriteModel
                    .find({user: user_id})
                    .populate({
                        path: 'product',
                        populate:[
                            {
                                path: 'rating',
                            },
                            {
                                path: 'promotion',
                                match: {isActive: true}
                            }
                        ]
                    })
    }

}
