import {
  IsString,
  IsEmail,
  IsEnum,
  IsBoolean,
  IsDateString,
  isString,
  IsNumber,
  IsPhoneNumber,
  IsObject,
  IsDate,
  IsInstance,
  ValidateNested,
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Endereco } from '../../enderecos/entities/endereco.entity';
import { CreateEnderecoDto } from '../../enderecos/dto/create-endereco.dto';
import {UpdateEnderecoDto } from '../../enderecos/dto/update-endereco.dto'

interface Endereço {
  cep: string;

  estado: string;

  cidade: string;

  rua: string;

  numero: number;

  complemento: string;
}

enum Tipo {
  comprador = 'comprador',
  anunciante = 'anunciante',
}

export class CreateUserDto {
  @IsString()
  @ApiProperty({example: "nome"})
  nome: string;

  @IsString()
  @ApiProperty({example: "mail@mail.com"})
  email: string;

  @IsString()
  @ApiProperty({example: "99999990901"})
  cpf: string;

  @IsPhoneNumber('BR')
  @ApiProperty({example: "999998765"})
  celular: string;

  @IsDateString()
  @ApiProperty({example: "1994-04-23"})
  dataNascimento: Date;

  @IsString()
  @ApiProperty({example: "vendedor honesto com mais de 80 anos no mercado"})
  descricao: string;

  @IsString()
  @ApiProperty()
  senha: string;

  @IsEnum(Tipo)
  @ApiProperty({example: "anunciante", enum: Tipo})
  tipo: string;

  @ApiProperty({
    example: {
      complemento: 'casa',
      cep: '12214-121',
      estado: 'SP',
      rua: 'rua das palmeiras',
      numero: 23,
      cidade: 'pinda',
    },
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => CreateEnderecoDto)
  endereco: CreateEnderecoDto;
}
