import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProductDto';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {

    constructor(private productService: ProductsService){}

    @Post('/create')
    createProduct(@Body() newProduct: CreateProductDto){
        return this.productService.createProduct(newProduct);
    }

}
