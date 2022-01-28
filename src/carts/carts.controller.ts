import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartsService } from './carts.service';
import { AddProductCartDto } from './dto/AddProductCartDto';
import { DeleteProductCartDto } from './dto/deleteProductCartDto';

@Controller('cart')
export class CartsController {

    constructor(private cartService: CartsService){}

    @Post('/add')
    @UseGuards(AuthGuard('jwt'))
    addProductCart(@Body() product: AddProductCartDto){
        return this.cartService.addProductCart(product);
    }

    @Delete('/delete')
    @UseGuards(AuthGuard('jwt'))
    deleteProductCart(@Body() product: DeleteProductCartDto){
       return this.cartService.removeProductCart(product);
    }

    @Delete('/delete/:user_id')
    @UseGuards(AuthGuard('jwt'))
    deleteAllProductCart(@Param('user_id') user_id: string){
       return this.cartService.removeAllProductCart(user_id);
    }

    @Get(':user_id')
    @UseGuards(AuthGuard('jwt'))
    getAllProductCart(@Param('user_id') user_id: string){
        return this.cartService.findAllProductUser(user_id)
    }

}
