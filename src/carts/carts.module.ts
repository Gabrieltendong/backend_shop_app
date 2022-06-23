import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { ProductsModule } from 'src/products/products.module';
import { PromoCodeModule } from 'src/promo_code/promo_code.module';
import { UsersModule } from 'src/users/users.module';
import { CartsController } from './carts.controller';
import { Cart, CartSchema } from './carts.schema';
import { CartsService } from './carts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}]),
    UsersModule,
    ProductsModule,
    PromoCodeModule,
    FavoritesModule
  ],
  controllers: [CartsController],
  providers: [CartsService],
  exports: [CartsService]
})
export class CartsModule {}
