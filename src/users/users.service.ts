import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Endereco } from '../enderecos/entities/endereco.entity';
import { checkData } from '../helpers/checkData';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const endereco = createUserDto.endereco;
    const userEndereco = this.enderecoRepository.create(endereco);
    await this.enderecoRepository.save(userEndereco);

    delete createUserDto.endereco;

    const conflictData = await checkData(createUserDto, this.userRepository);

    if (conflictData != '') {
      throw new ConflictException(`${conflictData} already in use`);
    }

    const user = this.userRepository.create({
      ...createUserDto,
      endereco: userEndereco,
    });

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOneBy({email})

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userRepository.findOneByOrFail({ id });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const conflictData = await checkData(updateUserDto, this.userRepository);

    if (conflictData != '') {
      throw new ConflictException(`${conflictData} already in use`);
    }

    let updatedUser = {
      ...user,
      ...updateUserDto,
    };

    return await this.userRepository.save(updatedUser);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    const endereco = await this.enderecoRepository.findOneBy({
      user: user,
    });

    console.log(endereco);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    await this.enderecoRepository.remove(endereco);
    return await this.userRepository.remove(user);
  }
}
