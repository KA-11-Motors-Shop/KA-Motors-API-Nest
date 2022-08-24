import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Anuncio } from '../../anuncios/entities/anuncio.entity';
import { Endereco } from '../../enderecos/entities/endereco.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  celular: string;

  @Column()
  dataNascimento: Date;

  @Column()
  senha: string;

  @Column()
  tipo: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  descricao: string;

  @OneToMany(() => Anuncio, (anuncio) => anuncio.seller, { eager: true })
  anuncios: Anuncio[];

  // @OneToMany(() => Imagem, (imagem) => imagem.anuncio, { eager: true })
  // imagens: Imagem[];

  @OneToOne(() => Endereco, { onDelete: 'CASCADE' })
  @JoinColumn()
  endereco: Endereco;
}
