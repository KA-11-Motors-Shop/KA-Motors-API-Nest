import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnunciosModule } from './anuncios/anuncios.module';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../ormconfig';
import { ImagensModule } from './imagens/imagens.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    AnunciosModule,
    ImagensModule,
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
export class AppModule {}
