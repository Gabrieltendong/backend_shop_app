import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsModule } from 'src/carts/carts.module';
import { UsersModule } from 'src/users/users.module';
import { CommandController } from './command.controller';
import { Command, CommandSchema } from './command.schema';
import { CommandService } from './command.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Command.name, schema: CommandSchema}]),
    CartsModule,
    UsersModule
  ],
  controllers: [CommandController],
  providers: [CommandService]
})
export class CommandModule {}
