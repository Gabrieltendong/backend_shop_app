import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { CommentsModule } from './comments/comments.module';
import { CommandModule } from './command/command.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ShippingMethodModule } from './shipping-method/shipping-method.module';
import { RatingModule } from './rating/rating.module';
import { PromoCodeModule } from './promo_code/promo_code.module';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot('mongodb+srv://DB_user:DB_pass@cluster0.mhb9i.mongodb.net/DB_social_app?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    ProductsModule,
    CartsModule,
    CommentsModule,
    CommandModule,
    CategoryModule,
    FavoritesModule,
    ShippingMethodModule,
    RatingModule,
    PromoCodeModule,
    PromotionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
