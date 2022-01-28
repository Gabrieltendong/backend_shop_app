import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { CommentsModule } from './comments/comments.module';
import { CommandModule } from './command/command.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://DB_user:DB_pass@cluster0.mhb9i.mongodb.net/DB_social_app?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    ProductsModule,
    CartsModule,
    CommentsModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
