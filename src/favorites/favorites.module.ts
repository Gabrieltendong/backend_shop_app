import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesController } from './favorites.controller';
import { Favorites, FavoritesSchema } from './favorites.schema';
import { FavoritesService } from './favorites.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Favorites.name, schema: FavoritesSchema}])
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService]
})
export class FavoritesModule {}
