import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    getProduct(@Param(':id') id: string){
        return this.productService.getProductById(id);
    }

    @Post('/create')
    createProduct(@Body() newProduct: CreateProductDto){
        return this.productService.createProduct(newProduct);
    }

}
