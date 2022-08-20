import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagensService } from './imagens.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('imagens')
@ApiTags('imagens')
export class ImagensController {
  constructor(private readonly imagensService: ImagensService) {}

  // @Post()
  // create(@Body() createImagenDto: CreateImagenDto) {
  //   return this.imagensService.create(createImagenDto);
  // }

  // @Get()
  // findAll() {
  //   return this.imagensService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.imagensService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateImagenDto: UpdateImagenDto) {
  //   return this.imagensService.update(+id, updateImagenDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.imagensService.remove(+id);
  // }
}
