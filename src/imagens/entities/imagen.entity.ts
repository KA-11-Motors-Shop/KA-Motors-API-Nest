import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Anuncio } from '../../anuncios/entities/anuncio.entity';

@Entity()
export class Imagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  link: string;

  @ManyToOne((type) => Anuncio, (anuncio) => anuncio.imagens)
  anuncio: Anuncio;
}
