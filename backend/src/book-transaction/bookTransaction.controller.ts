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
import { BookTransactionService } from './bookTransaction.service';
import { CreateBookTransactionDto } from './dto/create-book-transaction.dto';

@Controller('book-transactions')
export class BookTransactionController {
  constructor(
    private readonly bookTransactionService: BookTransactionService,
  ) {}

  @Get()
  async getAllTransactions() {
    return this.bookTransactionService.findAll();
  }

  @Get(':id')
  async getTransactionById(@Param('id') id: string) {
    return this.bookTransactionService.findById(id);
  }

  @Post()
  async createTransaction(@Body() createDto: CreateBookTransactionDto) {
    return this.bookTransactionService.create(createDto);
  }

  // @Put(':id')
  // async updateTransaction(
  //   @Param('id') id: string,
  //   @Body() updateDto: UpdateBookTransactionDto,
  // ) {
  //   return this.bookTransactionService.update(
  //     id,
  //     updateDto,
  //   );
  // }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    return this.bookTransactionService.delete(id);
  }
}
