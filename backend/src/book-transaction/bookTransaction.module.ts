import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookTransaction, BookTransactionSchema } from './bookTransaction.model';
import { BookTransactionService } from './bookTransaction.service';
import { BookTransactionController } from './bookTransaction.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookTransaction.name, schema: BookTransactionSchema },
    ]),
  ],
  controllers: [BookTransactionController],
  providers: [BookTransactionService],
})
export class BookTransactionModule {}
