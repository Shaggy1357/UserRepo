import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }
}
