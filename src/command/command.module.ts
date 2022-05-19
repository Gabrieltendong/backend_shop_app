import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsModule } from 'src/carts/carts.module';
import { PromoCodeModule } from 'src/promo_code/promo_code.module';
import { UsersModule } from 'src/users/users.module';
import { CommandController } from './command.controller';
import { Command, CommandSchema } from './command.schema';
import { CommandService } from './command.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Command.name, schema: CommandSchema}]),
    CartsModule,
    UsersModule,
    PromoCodeModule
  ],
  controllers: [CommandController],
  providers: [CommandService],
  exports: [CommandService]
})
export class CommandModule {}
