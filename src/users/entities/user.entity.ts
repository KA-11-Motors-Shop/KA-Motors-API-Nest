import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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

  @OneToOne(() => Endereco, {onDelete: "CASCADE"})
  @JoinColumn()
  endereco: Endereco;
}
