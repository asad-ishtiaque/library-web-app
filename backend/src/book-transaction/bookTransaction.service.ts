import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookTransaction } from './bookTransaction.model';
import { CreateBookTransactionDto } from './dto/create-book-transaction.dto';

@Injectable()
export class BookTransactionService {
  constructor(
    @InjectModel(BookTransaction.name)
    private readonly bookTransactionModel: Model<BookTransaction>,
  ) {}

  async create(createBookTransactionDto: CreateBookTransactionDto) {
    const newTransaction = new this.bookTransactionModel(
      createBookTransactionDto,
    );
    return newTransaction.save();
  }

  async findAll() {
    return this.bookTransactionModel.find().populate('userId bookId requestId');
  }

  async findById(id: string) {
    const transaction = await this.bookTransactionModel
      .findById(id)
      .populate('userId bookId requestId');

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return transaction;
  }

  // Update a book transaction
  //   async update(
  //     id: string,
  //     updateBookTransactionDto: UpdateBookTransactionDto,
  //   ): Promise<BookTransaction> {
  //     const updatedTransaction = await this.bookTransactionModel
  //       .findByIdAndUpdate(id, updateBookTransactionDto, { new: true })
  //       .exec();

  //     if (!updatedTransaction) {
  //       throw new NotFoundException(`Transaction with ID ${id} not found`);
  //     }

  //     return updatedTransaction;
  //   }

  async delete(id: string) {
    const deletedTransaction = await this.bookTransactionModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedTransaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return { id: deletedTransaction._id };
  }
}
