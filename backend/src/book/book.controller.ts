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
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/types/user-types.enum';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Roles(Role.Admin, Role.User)
  @Get()
  getAllBooks() {
    return this.bookService.findAll();
  }
  @Roles(Role.Admin)
  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Roles(Role.Admin)
  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  // @Put(':id')
  //  updateBook(
  //   @Param('id') id: string,
  //   @Body() updateBookDto: UpdateBookDto,
  // ) {
  //     return await this.bookService.update(id, updateBookDto);
  // }

  @Roles(Role.Admin)
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
