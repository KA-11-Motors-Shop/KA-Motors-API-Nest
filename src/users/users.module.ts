import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Endereco } from '../enderecos/entities/endereco.entity';
import { AuthService } from './auth/auth.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
@Module({
  imports: [TypeOrmModule.forFeature([User, Endereco])],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*')
  }
}
