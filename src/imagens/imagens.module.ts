import { Module } from '@nestjs/common';
import { ImagensService } from './imagens.service';
import { ImagensController } from './imagens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imagem } from './entities/imagen.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Imagem])],
  controllers: [ImagensController],
  providers: [ImagensService],
})
export class ImagensModule {}
