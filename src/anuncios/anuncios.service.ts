import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Anuncio } from './entities/anuncio.entity';
import { Repository } from 'typeorm';
import { Imagem } from '../imagens/entities/imagen.entity';
import { User } from '../users/entities/user.entity';
@Injectable()
export class AnunciosService {
  constructor(
    @InjectRepository(Anuncio) private anuncioRepo: Repository<Anuncio>,
    @InjectRepository(Imagem) private imagemRepo: Repository<Imagem>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  async create(createAnuncioDto: CreateAnuncioDto, user: User) {
    const photos = createAnuncioDto.photos;
    delete createAnuncioDto.photos;
    const anuncio = this.anuncioRepo.create(createAnuncioDto);

    console.log(user)

    let anuncioPhotos: Imagem[] = [];
    if (photos.length > 1) {
      for (let link of photos) {
        const photo = new Imagem();
        photo.link = link;

        const imagem = this.imagemRepo.create(photo);

        await this.imagemRepo.save(imagem);

        anuncioPhotos.push(imagem);
      }
    }
    anuncio.imagens = anuncioPhotos;
    anuncio.seller = user;
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
    return;
  }
}
