import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1 days'
      }
    }),
    PassportModule.register({ defaultStrategy: 'jwt'})
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy, GoogleStrategy],
  exports: [UsersService]
})
export class UsersModule {}
