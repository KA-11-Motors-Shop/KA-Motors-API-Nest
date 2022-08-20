import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; 

export class SigninUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  senha: string;
}
