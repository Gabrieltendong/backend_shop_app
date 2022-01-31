import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

}
