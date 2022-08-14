import { Injectable } from '@nestjs/common';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Anuncio } from './entities/anuncio.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AnunciosService {
  constructor(
    @InjectRepository(Anuncio) private anuncioRepo: Repository<Anuncio>,
  ) {}
  create(createAnuncioDto: CreateAnuncioDto) {
    console.log(createAnuncioDto)
    const photos = delete createAnuncioDto.photos
    const anuncio = this.anuncioRepo.create(createAnuncioDto)

    return this.anuncioRepo.save(anuncio) 
  }

  findAll() {
    return `This action returns all anuncios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anuncio`;
  }

  update(id: number, updateAnuncioDto: UpdateAnuncioDto) {
    return `This action updates a #${id} anuncio`;
  }

  remove(id: number) {
    return `This action removes a #${id} anuncio`;
  }
}
