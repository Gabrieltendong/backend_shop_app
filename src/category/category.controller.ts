import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './category.service';
import CreateCategoryDto from './dto/createCategoryDto';

@Controller('category')
export class CategoryController {
    constructor(private caterory: CategoryService){
    }

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    createCaterory(@Body() newCategory: CreateCategoryDto){
        return this.caterory.createCategory(newCategory)
    }
}
