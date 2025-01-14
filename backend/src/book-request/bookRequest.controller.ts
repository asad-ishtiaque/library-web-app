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
import { BookRequestService } from './bookRequest.service';
import { CreateBookRequestDto } from './dto/create-book-request.dto';

@Controller('book-requests')
export class BookRequestController {
  constructor(private readonly bookRequestService: BookRequestService) {}

  @Get()
  async getAllBookRequests() {
    return await this.bookRequestService.findAll();
  }

  @Get(':id')
  async getBookRequestById(@Param('id') id: string) {
    return this.bookRequestService.findById(id);
  }

  @Post()
  async createBookRequest(@Body() createBookRequestDto: CreateBookRequestDto) {
    return await this.bookRequestService.create(createBookRequestDto);
  }

  //   @Put(':id')
  //   async updateBookRequest(
  //     @Param('id') id: string,
  //     @Body() updateBookRequestDto: UpdateBookRequestDto,
  //   ) {
  //     return this.bookRequestService.update(id, updateBookRequestDto);
  //   }

  @Delete(':id')
  async deleteBookRequest(@Param('id') id: string) {
    return this.bookRequestService.delete(id);
  }
}
