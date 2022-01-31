import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/createCommentDto';

@Controller('product/comments')
export class CommentsController {
    constructor(private commentService: CommentsService){}

    @Post('/add')
    @UseGuards(AuthGuard('jwt'))
    addComment(@Body() newComment: CreateCommentDto){
        return this.commentService.createComment(newComment)
    }
}
