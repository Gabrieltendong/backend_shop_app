import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments, CommentsDocument } from './comments.schema';
import { CreateCommentDto } from './dto/createCommentDto';

@Injectable()
export class CommentsService {

    constructor(@InjectModel(Comments.name) private commentModel: Model<CommentsDocument>){}

    async createComment(comment: CreateCommentDto){
        const newComment = new this.commentModel(comment)
        await newComment.save();
        return newComment;
    }

}
