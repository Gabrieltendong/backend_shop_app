import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/CreateProductDto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ){}

    async getAllActiveProduct(){
        const products = await this.productModel
        .find({isActive: true})
        .populate('rating')
        .populate({
            path: 'promotion',
            match: {isActive: true}
        })
        return products
    }

    async getAllProduct(){
        const products = await this.productModel
        .find()
        .populate('rating')
        .populate({
            path: 'promotion',
            match: {isActive: true}
        })
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
        if(createProductDto.price <= 0){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'you have invalid price',
            }, HttpStatus.FORBIDDEN)
        }
        createProductDto.image.map((item) => {
            if(!this.isURL(item)){
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'you have invalid url image',
                }, HttpStatus.FORBIDDEN)
            } 
        })
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
            console.log(e.name)
            if(e.name == "ValidationError")
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: "Cette categorie n'existe pas",
                }, HttpStatus.FORBIDDEN)
            else 
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Ce Produit existe déja',
                }, HttpStatus.FORBIDDEN)
            
        }
    }

    async getProductById(id: ObjectId): Promise<Product | undefined>{
        try{
            const product = await this.productModel
            .findOne({_id: id})
            .populate('rating')
            .populate({
                path: 'promotion',
                match: {isActive: true}
            })
            return product
        }catch(e){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: "Ce Produit n'existe pas",
              }, HttpStatus.BAD_REQUEST)
        }
    }

    async addComment(){
        
    }

    async getProductByCategory(category_id: ObjectId){
        try{
           const products =  await this.productModel
           .find({category: category_id, isActive: true})
           .populate('rating')
            .populate({
                path: 'promotion',
                match: {isActive: true}
            })
           return products;
        }catch{
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: "Cette categorie n'existe pas",
              }, HttpStatus.BAD_REQUEST)
        }
    }

}
