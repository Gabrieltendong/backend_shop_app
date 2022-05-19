import { Module } from '@nestjs/common';
import { PromoCodeService } from './promo_code.service';
import { PromoCodeController } from './promo_code.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PromoCode, PromoCodeSchema } from './schemas/promo_code.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: PromoCode.name, schema: PromoCodeSchema}])
  ],
  controllers: [PromoCodeController],
  providers: [PromoCodeService],
  exports: [PromoCodeService]
})
export class PromoCodeModule {}
