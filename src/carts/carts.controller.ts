import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import { CartsService } from './carts.service';
import { AddProductCartDto } from './dto/AddProductCartDto';
import { DeleteProductCartDto } from './dto/deleteProductCartDto';

@Controller('cart')
export class CartsController {

    constructor(private cartService: CartsService){}

    @Post('/add')
    @UseGuards(AuthGuard('jwt'))
    addProductCart(@Body() product: AddProductCartDto, @Request() req){
        return this.cartService.addProductCart(product);
    }

    @Put('/update')
    @UseGuards(AuthGuard('jwt'))
    updateQuantity(@Body() product: AddProductCartDto){
        return this.cartService.updateQuantity(product);
    }

    @Delete('/delete')
    @UseGuards(AuthGuard('jwt'))
    deleteProductCart(@Body() product: DeleteProductCartDto){
       return this.cartService.removeProductCart(product);
    }

    @Delete('/delete/:user_id')
    @UseGuards(AuthGuard('jwt'))
    deleteAllProductCart(@Param('user_id') user_id: ObjectId){
       return this.cartService.removeAllProductCart(user_id);
    }

    @Get(':user_id')
    @UseGuards(AuthGuard('jwt'))
    getAllProductCart(@Param('user_id') user_id: ObjectId){
        return this.cartService.findAllProductUser(user_id)
    }

}
