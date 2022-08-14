import { Module } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { AnunciosController } from './anuncios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anuncio } from './entities/anuncio.entity';
import { Imagem } from '../imagens/entities/imagen.entity';
import { ImagensModule } from '../imagens/imagens.module';
@Module({
  imports: [TypeOrmModule.forFeature([Anuncio, Imagem]),],
  controllers: [AnunciosController],
  providers: [AnunciosService]
})
export class AnunciosModule {}
