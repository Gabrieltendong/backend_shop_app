import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
        console.log('addProductDto', addProductDto)
        const cart_user = await this.cartModel.findOne({user_id: addProductDto.user_id, product_id: addProductDto.product_id})
        // const user = await this.userService.findUserById(addProductDto.user_id)
        const product = await this.productService.getProductById(addProductDto.product_id)

        console.log(cart_user)

        if(!cart_user){
           const newProductCart = new this.cartModel(addProductDto);
           await newProductCart.save();
           return newProductCart;
        }

        if(cart_user && addProductDto.quantity && cart_user.quantity != addProductDto.quantity){
            await cart_user.updateOne({quantity: addProductDto.quantity});
            return cart_user;
        }
        
        return {message: "ce produit existe deja dans votre panier"}
    }

    async removeProductCart(productCart: DeleteProductCartDto){
        const product = await this.cartModel.findOne(productCart)
        if(product){
            await this.cartModel.deleteOne(productCart)
            return {message: 'product remove cart successfully'};
        }
        throw new InternalServerErrorException('cannot delete product')
    }

    async removeAllProductCart(user_id: string){
        const product = await this.cartModel.findOne({user_id})
        if(product){
            await this.cartModel.deleteMany({user_id})
            return {message: 'remove all product cart successfully'};
        }
        throw new InternalServerErrorException('cannot delete product')
    }

    async findAllProductUser(user_id: string){
        const product = await this.cartModel.find({user_id})
        // const product_id = await this.productService.getProductById()
        return product
    }

}
