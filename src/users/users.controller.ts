import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { Serializer } from '../interceptors/serializer.interceptor';
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  @Serializer(UserDto)
  @ApiCreatedResponse({ type: UserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.signup(createUserDto);
    return user;
  }

  @Post('/signin')
  @ApiOkResponse({ type: UserDto })
  async signinUser(@Body() body: SigninUserDto) {
    const user = await this.authService.signin(body);
    return user;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
