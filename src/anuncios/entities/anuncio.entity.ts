import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Imagem } from '../../imagens/entities/imagen.entity';

@Entity()
export class Anuncio {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ type: 'varchar', width: 256 })
  titulo: string;

  @Column({ type: 'integer' })
  preco: number;

  @Column({ type: 'integer' })
  ano: number;

  @Column({ type: 'varchar', width: 256 })
  categoria: string;

  @Column({ type: 'int' })
  quilometragem: number;

  @Column({ type: 'text', width: 256 })
  descricao: string;

  @Column({ type: 'varchar', width: 256 })
  tipo: string;

  @Column({ type: 'boolean' })
  publicado: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(() => Imagem, (imagem) => imagem.anuncio, { eager: true })
  imagens: Imagem[];
}
