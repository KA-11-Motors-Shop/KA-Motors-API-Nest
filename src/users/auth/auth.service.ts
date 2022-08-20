import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { SigninUserDto } from '../dto/signin-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(dto: CreateUserDto) {

    const {email, senha} = dto

    let user = await this.userService.findOneByEmail(email)

    if ( user) {
      throw new BadRequestException('email already in use')
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const hashedUser = {
      ...dto,
      senha: hashedPassword
    }

    return this.userService.create(hashedUser)
  }

  async signin(dto: SigninUserDto) {
    const { email, senha} = dto

    const user = await this.userService.findOneByEmail(email)

    if(!user) {
      throw new BadRequestException('email nao registrado') 
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha)

    if (!passwordMatch) {
      throw new BadRequestException('senha ou email errados')
    }

    return user;
  }
}