import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/CreateProductDto';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {

    constructor(private productService: ProductsService){}

    @Get()
    getAllproducts(){
        return this.productService.getAllProduct()
    }

    @Get(':id')
    getProduct(@Param('id') id: ObjectId){
        return this.productService.getProductById(id);
    }

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    createProduct(@Body() newProduct: CreateProductDto){
        return this.productService.createProduct(newProduct);
    }

    @Get('/category/:category_id')
    @UseGuards(AuthGuard('jwt'))
    getProductByCategory(@Param('category_id') category_id: ObjectId){
        return this.productService.getProductByCategory(category_id);
    }

}
