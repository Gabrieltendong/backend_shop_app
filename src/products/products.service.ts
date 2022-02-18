import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/CreateProductDto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ){}

    async getAllProduct(){
        const products = await this.productModel.find()
        return products
    }

    async createProduct(createProductDto: CreateProductDto){
        const newProduct = new this.productModel(createProductDto);
        await newProduct.save();
        return newProduct;
    }

    async getProductById(id: string): Promise<Product | undefined>{
        const product = await this.productModel.findOne({_id: id})
        return product
    }

    async addComment(){
        
    }
}
