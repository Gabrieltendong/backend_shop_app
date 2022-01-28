import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('product/comments')
export class CommentsController {
    constructor(private commentService: CommentsService){}

    @Post('/add')
    addComment(@Body() newComment: CreateCommentDto){
        return this.commentService.createComment(newComment)
    }
}
