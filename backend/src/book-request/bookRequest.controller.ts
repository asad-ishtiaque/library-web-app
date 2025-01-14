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
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/types/user-types.enum';

@Controller('book-requests')
export class BookRequestController {
  constructor(private readonly bookRequestService: BookRequestService) {}

  @Roles(Role.Admin)
  @Get()
  async getAllBookRequests() {
    return await this.bookRequestService.findAll();
  }

  @Roles(Role.Admin)
  @Get(':id')
  async getBookRequestById(@Param('id') id: string) {
    return this.bookRequestService.findById(id);
  }

  @Roles(Role.User)
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

  @Roles(Role.User)
  @Delete(':id')
  async deleteBookRequest(@Param('id') id: string) {
    return this.bookRequestService.delete(id);
  }
}
