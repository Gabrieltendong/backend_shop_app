import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        const products = await this.productModel.find({isActive: true})
        return products
    }

    isBlank(text: string){
        return (/^\s+$/).test(text)
    }

    isURL(str) {
        var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.(png|jpg|jpeg|gif)$/g);
        return (res !== null)
    }

    async createProduct(createProductDto: CreateProductDto){
        console.log('isUrl', this.isURL(createProductDto.image))
        if(!this.isURL(createProductDto.image)){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'you have invalid url image',
            }, HttpStatus.FORBIDDEN)
        } 
        Object.values(createProductDto).map(value => {
            if(this.isBlank(value)){
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Veuiller remplir touts les champs de formulaire',
                  }, HttpStatus.FORBIDDEN)
            }
        })
        try{
            const newProduct = new this.productModel(createProductDto);
            await newProduct.save();
            return newProduct;
        }catch(e){
            console.log(e)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Ce Produit existe déja',
              }, HttpStatus.FORBIDDEN)
        }
    }

    async getProductById(id: string): Promise<Product | undefined>{
        const product = await this.productModel.findOne({_id: id})
        return product
    }

    async addComment(){
        
    }

}
