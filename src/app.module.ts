import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnunciosModule } from './anuncios/anuncios.module';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../ormconfig';
import { ImagensModule } from './imagens/imagens.module';
import { UsersModule } from './users/users.module';
import { EnderecosModule } from './enderecos/enderecos.module';
const cookieSession = require('cookie-session');
import { config } from 'dotenv';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    AnunciosModule,
    ImagensModule,
    UsersModule,
    EnderecosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [process.env.COOKIE_KEY],
        }),
      )
      .forRoutes('*');
  }
}