import { ApiProperty } from '@nestjs/swagger';
import { CreateAnuncioDto } from './create-anuncio.dto';
import { User } from '../../users/entities/user.entity';
import { Transform, Expose } from 'class-transformer';
import { Imagem } from '../../imagens/entities/imagen.entity';

export class AnuncioDto extends CreateAnuncioDto {
  @Expose()
  @ApiProperty({ example: 'd227cab0-2297-4511-918f-c2662774ed9e' })
  id: string;

  @Expose()
  titulo: string;

  @Expose()
  preco: number;

  @Expose()
  ano: number;

  @Expose()
  categoria: string;

  @Expose()
  quilometragem: number;

  @Expose()
  tipo: string;

  @Expose()
  publicado: boolean;

  @Expose()
  createdAt: Date

  @Expose()
  updatedAt: Date

  @Expose()
  @Transform(({obj}) => obj.imagens)
  imagens: Imagem[]

  @Expose()
  @Transform(({obj}) => obj.seller.id)
  sellerId: string;
}
