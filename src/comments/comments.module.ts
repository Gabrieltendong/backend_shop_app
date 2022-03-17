import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'src/products/products.module';
import { UsersModule } from 'src/users/users.module';
import { CommentsController } from './comments.controller';
import { Comments, CommentsSchema } from './comments.schema';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Comments.name, schema: CommentsSchema}]),
    ProductsModule,
    UsersModule
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
