import { IsEmail, IsString } from 'class-validator';
import { isString } from 'util';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
