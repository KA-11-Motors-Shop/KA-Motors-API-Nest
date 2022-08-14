import { Injectable, NotFoundException } from '@nestjs/common';
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
    console.log(createAnuncioDto);
    const photos = delete createAnuncioDto.photos;
    const anuncio = this.anuncioRepo.create(createAnuncioDto);

    return this.anuncioRepo.save(anuncio);
  }

  findAll() {
    return this.anuncioRepo.find();
  }

  async findOne(id: string) {
    const anuncio = await this.anuncioRepo.findOneBy({ id });

    if (!anuncio) {
      throw new NotFoundException('id not found');
    }
    return anuncio;
  }

  async update(id: string, updateAnuncioDto: UpdateAnuncioDto) {
    const anuncio = await this.anuncioRepo.findOneBy({ id });

    if (!anuncio) {
      throw new NotFoundException('anuncio do not exist');
    }

    let updatedAnuncio = { ...anuncio, ...updateAnuncioDto };

    return this.anuncioRepo.save(updatedAnuncio);
  }

  async remove(id: string) {
    const anuncio = await this.anuncioRepo.findOneBy({ id });

    if (!anuncio) {
      throw new NotFoundException('anuncio not found');
    }

    this.anuncioRepo.remove(anuncio);
    return 
  }
}
