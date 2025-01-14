import { OmitType } from '@nestjs/swagger';
import { User } from '../user.model';

export class CreateUserDto extends OmitType(User, ['password']) {}
