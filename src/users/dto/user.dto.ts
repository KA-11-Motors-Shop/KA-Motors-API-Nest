import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  @ApiProperty({ example: '0bc7735d-40b4-43ba-b3f1-4b5ce067ad74' })
  id: string;

  @Expose()
  @ApiProperty()
  nome: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  tipo: string;

  @Expose()
  @ApiProperty({
    example: {
      id: '0bc7735d-40b4-43ba-b3f1-4b5ce067ad74',
      cep: '12214-121',
      estado: 'SP',
      cidade: 'pinda',
      rua: 'rua das palmeiras',
      numero: 23,
      complemento: 'casa',
    },
  })
  endereco;
}
