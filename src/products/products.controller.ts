import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    getProduct(@Param('id') id: string){
        return this.productService.getProductById(id);
    }

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    createProduct(@Body() newProduct: CreateProductDto){
        return this.productService.createProduct(newProduct);
    }

}
