import { Injectable } from '@nestjs/common';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagem } from './entities/imagen.entity';
@Injectable()
export class ImagensService {
  constructor(
    @InjectRepository(Imagem) private imagemRepo: Repository<Imagem>,
  ) {}
  create(createImagenDto: CreateImagenDto) {
    const imagem = this.imagemRepo.create(createImagenDto)

    return this.imagemRepo.save(imagem)
  }

  findAll() {
    return `This action returns all imagens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagen`;
  }

  update(id: number, updateImagenDto: UpdateImagenDto) {
    return `This action updates a #${id} imagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagen`;
  }
}
