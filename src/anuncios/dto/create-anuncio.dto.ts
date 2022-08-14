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
  IsInt
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
  @ApiProperty()
  titulo: string;

  @IsPositive()
  @ApiProperty()
  @Min(1000)
  @Max(10000000)
  preco: number;

  @Min(1920)
  @Max(2023)
  @IsInt()
  ano: number;

  @IsEnum(Categoria)
  categoria: string;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  @ApiProperty()
  quilometragem: number;

  @IsString()
  @ApiProperty()
  descricao: string;

  @IsEnum(Tipo)
  @ApiProperty()
  tipo: string;

  @IsBoolean()
  @ApiProperty()
  publicado: boolean;

  @IsArray()
  @ApiProperty({ isArray: true })
  photos: string[];
}
