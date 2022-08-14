import {
  IsString,
  IsDate,
  IsBoolean,
  IsArray,
  IsPositive,
  Min,
  Max,
  IsOptional,
  IsEnum,
  IsNumber,
  IsInt,
} from 'class-validator';

enum Categoria {
  moto = 'moto',
  carro = 'carro',
}

enum Tipo {
  venda = 'venda',
  leilao = 'leilão',
}

import { ApiProperty } from '@nestjs/swagger';
export class CreateAnuncioDto {
  @IsString()
  @ApiProperty({example: "nissan s13"})
  titulo: string;

  @IsPositive()
  @ApiProperty({example:20000})
  @Min(1000)
  @Max(10000000)
  preco: number;

  @Min(1920)
  @Max(2023)
  @IsInt()
  @ApiProperty({example:1999})
  ano: number;

  @IsEnum(Categoria)
  @ApiProperty({example: "carro"})
  categoria: string;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  @ApiProperty({example: 10000})
  quilometragem: number;

  @IsString()
  @ApiProperty({example: "carro popular seminovo"})
  descricao: string;

  @IsEnum(Tipo)
  @ApiProperty({example: 'venda'})
  tipo: string;

  @IsBoolean()
  @ApiProperty()
  publicado: boolean;

  @IsArray()
  @ApiProperty({
    isArray: true,
    example: [
      'https://garage-defend.com/uploads/cars/10-19/AUb3lU4KcPKXEb9BMaN622YwUkwIgIUZcv4TxO0V.jpeg',
      'https://garage-defend.com/uploads/cars/01-21/2XDBY3P8cWxauF3NzagDr14pIpRDaBxCPaiZlcK2.jpeg',
    ],
  })
  photos: string[];
}
