import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { Comments, CommentsDocument } from './comments.schema';
import { CreateCommentDto } from './dto/createCommentDto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel(Comments.name) private commentModel: Model<CommentsDocument>,
        private productService: ProductsService,
        private userService: UsersService
    ){}

    isBlank(text: string){
        return (/^\s+$/).test(text)
    }

    async createComment(comment: CreateCommentDto){
        const user = await this.userService.findUserById(comment.user_id)
        const product = await this.productService.getProductById(comment.product_id)
        if(this.isBlank(comment.message)){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'message is empty',
              }, HttpStatus.FORBIDDEN)
        }

        const newComment = new this.commentModel(comment)
        await newComment.save();
        return newComment;
    }

}
