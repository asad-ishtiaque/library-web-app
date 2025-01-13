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

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks() {
    return this.bookService.findAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  // @Put(':id')
  //  updateBook(
  //   @Param('id') id: string,
  //   @Body() updateBookDto: UpdateBookDto,
  // ) {
  //   try {
  //     return await this.bookService.update(id, updateBookDto);
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
