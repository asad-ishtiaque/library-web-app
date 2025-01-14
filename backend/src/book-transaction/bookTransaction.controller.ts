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
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/types/user-types.enum';

@Controller('book-transactions')
export class BookTransactionController {
  constructor(
    private readonly bookTransactionService: BookTransactionService,
  ) {}

  @Roles(Role.Admin)
  @Get()
  async getAllTransactions() {
    return this.bookTransactionService.findAll();
  }
  @Roles(Role.Admin)
  @Get(':id')
  async getTransactionById(@Param('id') id: string) {
    return this.bookTransactionService.findById(id);
  }

  @Roles(Role.Admin, Role.User)
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

  @Roles(Role.Admin)
  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    return this.bookTransactionService.delete(id);
  }
}
