import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/createCommandDto';

@Controller('command')
export class CommandController {

    constructor(private commandService: CommandService){}

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    createCommand(@Body() newCommand: CreateCommandDto){
        return this.commandService.createNewCommand(newCommand);
    }

    @Get(':user_id')
    getCommandUser(@Param('user_id') user_id: ObjectId ){
        return this.commandService.getCommandUser(user_id)
    }

}
