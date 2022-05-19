import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rating, RatingSchema } from './schemas/rating.schema';
import { CommandModule } from 'src/command/command.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Rating.name, schema: RatingSchema}]),
    CommandModule
  ],
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
