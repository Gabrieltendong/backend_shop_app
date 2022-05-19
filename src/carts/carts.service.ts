import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { Cart, CartDocument } from './carts.schema';
import { AddProductCartDto } from './dto/AddProductCartDto';
import { DeleteProductCartDto } from './dto/deleteProductCartDto';

@Injectable()
export class CartsService {

    constructor(
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
        private userService: UsersService,
        private productService: ProductsService
    ){}

    async addProductCart(addProductDto: AddProductCartDto){
        try{
            const cart_user = await this.cartModel.findOne({
                user_id: addProductDto.user_id, 
                product: addProductDto.product
            })
            
            if(!cart_user){
                const newProductCart = new this.cartModel(addProductDto);
                await newProductCart.save();
                return {message: "Votre panier à été mis à jour"};
            }
    
            if(cart_user){
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
        try{
            const product = await this.cartModel.findOne(productCart)
            console.log('product', product)
            if(product){
                await this.cartModel.deleteOne(productCart)
                return {message: 'product remove cart successfully'};
            }
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: "user not exist",
              }, HttpStatus.BAD_REQUEST)
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

    async findAllProductUser(user_id: ObjectId){
        const user = await this.userService.findUserById(user_id)
        let product = await this.cartModel.find({user_id}).populate('product')
        return product;
    }

}
