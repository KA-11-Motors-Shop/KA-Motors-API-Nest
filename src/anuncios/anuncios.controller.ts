import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import { ApiOkResponse, ApiCreatedResponse, ApiTags,  } from '@nestjs/swagger';
import { AnuncioDto } from './dto/anuncio-dto';
import { User } from '../users/entities/user.entity';
import { CurrentUser } from '../users/decorators/current-user.decorator'
import { Serializer } from '../interceptors/serializer.interceptor';

@Controller('anuncios')
@ApiTags('Anuncios')
export class AnunciosController {
  constructor(private readonly anunciosService: AnunciosService) {}

  @Post()
  @Serializer(AnuncioDto)
  @ApiCreatedResponse({ type: AnuncioDto })
  create(@Body() createAnuncioDto: CreateAnuncioDto, @CurrentUser() user: User) {
    return this.anunciosService.create(createAnuncioDto, user);
  }

  @Get()
  @ApiOkResponse({ isArray: true, type: AnuncioDto })
  findAll() {
    return this.anunciosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AnuncioDto })
  findOne(@Param('id') id: string) {
    return this.anunciosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnuncioDto: UpdateAnuncioDto) {
    return this.anunciosService.update(id, updateAnuncioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anunciosService.remove(id);
  }
}
