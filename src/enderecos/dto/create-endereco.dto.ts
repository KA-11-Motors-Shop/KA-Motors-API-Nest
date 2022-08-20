import { IsString,IsNumber } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  cep: string;

  @IsString()
  estado: string;

  @IsString()
  cidade: string;

  @IsString()
  rua: string;

  @IsNumber()
  numero: number;

  @IsString()
  complemento: string;
}
