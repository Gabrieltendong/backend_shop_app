import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FavoritesService } from 'src/favorites/favorites.service';
import { ProductsService } from 'src/products/products.service';
import { Product } from 'src/products/schemas/product.schema';
import { PromoCodeService } from 'src/promo_code/promo_code.service';
import { UsersService } from 'src/users/users.service';
import { Cart, CartDocument } from './carts.schema';
import { AddProductCartDto } from './dto/AddProductCartDto';
import { DeleteProductCartDto } from './dto/deleteProductCartDto';

@Injectable()
export class CartsService {

    constructor(
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
        private userService: UsersService,
        private productService: ProductsService,
        private promoCodeService: PromoCodeService,
        private favoriteService: FavoritesService
    ){}

    async addProductCart(addProductDto: AddProductCartDto){
        const product = await this.productService.getProductById(addProductDto.product)
        try{
            const cart_user = await this.cartModel.findOne({
                user_id: addProductDto.user_id, 
                product: addProductDto.product
            })
            
            if(!cart_user){
                addProductDto['price'] = product?.price
                if(product.promotion){
                    addProductDto['price'] = (product?.price - ((product?.promotion?.reduction/100) * product?.price)).toFixed(2)
                }
                if(addProductDto.promo_code){
                    const promoCode = await this.promoCodeService.findOne(addProductDto.promo_code)
                    addProductDto['price'] = (product?.price - ((promoCode?.reduction/100) * product?.price)).toFixed(2)
                }
                const newProductCart = new this.cartModel(addProductDto);
                await newProductCart.save();
                return {message: "Votre panier à été mis à jour"};
            }
    
            if(cart_user){
                console.log('cart user')
                const resp = await cart_user.updateOne({$inc: {quantity: addProductDto.quantity}});
                return {message: "Votre panier à été mis à jour"};
            }
        }
        catch{
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: "user or product not exist",
              }, HttpStatus.BAD_REQUEST)
        }
    }

    async updateQuantity(addProductDto: AddProductCartDto){
        const user = await this.userService.findUserById(addProductDto.user_id)
        const cart_user = await this.cartModel.findOne({
            user_id: addProductDto.user_id, 
            product: addProductDto.product
        })

        if(cart_user){
            const resp = await cart_user.updateOne({quantity: addProductDto.quantity});
            return {message: "Votre panier à été mis à jour"};
        }
    }

    async removeProductCart(productCart: DeleteProductCartDto){
        const user = await this.userService.findUserById(productCart.user_id)
        try{
            const product = await this.cartModel.findOne(productCart)
            console.log('product', product)
            if(product){
                await this.cartModel.deleteOne(productCart)
                return {message: 'product remove cart successfully'};
            }
        }catch{
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: "product not exist in this cart",
              }, HttpStatus.BAD_REQUEST)
        }
    }

    async removeAllProductCart(user_id: ObjectId){
        const product = await this.cartModel.findOne({user_id})
        if(product){
            await this.cartModel.deleteMany({user_id})
            return {message: 'remove all product cart successfully'};
        }
        throw new InternalServerErrorException('cannot delete product')
    }

    async findAllProductUser(user_id: ObjectId): Promise<any[]>{
        const user = await this.userService.findUserById(user_id)
        let products: any[] = await this.cartModel.find({user_id}).populate('product')
        return products;
    }

    async addFavoriteToCart(user_id: ObjectId){
        const productCart = await this.findAllProductUser(user_id)
        const  favorites = await this.favoriteService.getFavoritesUser(user_id)
        favorites.map(item => {
            const newProductCart: AddProductCartDto = {
                product: item.product._id,
                user_id,
                quantity: 1
            }
            this.addProductCart(newProductCart)
        })
        return {message: "Vos produits favoris ont été ajouté au panier avec succès"};
    }

}
