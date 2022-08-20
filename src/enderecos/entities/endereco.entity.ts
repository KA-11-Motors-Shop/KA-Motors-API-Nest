import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @OneToOne(() => User, (user) => user.endereco, { onDelete: 'CASCADE' })
  user: User;
}
