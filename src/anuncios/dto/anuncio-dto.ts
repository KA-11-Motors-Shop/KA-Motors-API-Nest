import { ApiProperty } from '@nestjs/swagger';
import { CreateAnuncioDto } from './create-anuncio.dto';


export class AnuncioDto extends CreateAnuncioDto {
  @ApiProperty({ example: 'd227cab0-2297-4511-918f-c2662774ed9e' })
  id: string;
}
