import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
import CreateCategoryDto from './dto/createCategoryDto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ){}

    createCategory(createCategoryDto: CreateCategoryDto): Category{
        try{
            const newCat = new this.categoryModel(createCategoryDto)
            newCat.save();
            return newCat;
        }catch{
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Cette categorie existe déja'
            }, HttpStatus.FORBIDDEN)
        }
    }

    findAll(){
       return this.categoryModel.find()
    }

}
