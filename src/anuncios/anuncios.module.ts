import { Module } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { AnunciosController } from './anuncios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anuncio } from './entities/anuncio.entity';
import { Imagem } from '../imagens/entities/imagen.entity';
import { ImagensModule } from '../imagens/imagens.module';
import { User } from '../users/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Anuncio, Imagem, User]),],
  controllers: [AnunciosController],
  providers: [AnunciosService]
})
export class AnunciosModule {}
