import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Role } from 'src/common/types/user-types.enum';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.Admin)
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
  @Roles(Role.User)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
  @Roles(Role.User)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //   @Put(":id")
  //   updateUser(@Body() updateUserDto: UpdateUserDto) {
  //     return this.userService.update(updateUserDto)
  //   }
  @Roles(Role.Admin)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
