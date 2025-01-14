import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async findAll() {
    return this.bookModel.find();
  }

  async findOne(id: string) {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return book;
  }

  async create(createBookDto: CreateBookDto) {
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  //   async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
  //     const updatedBook = await this.bookModel
  //       .findByIdAndUpdate(id, updateBookDto, { new: true })
  //       .exec();
  //     if (!updatedBook) {
  //       throw new NotFoundException(`Book with ID "${id}" not found`);
  //     }
  async delete(id: string) {
    const deletedBook = await this.bookModel.findByIdAndDelete(id);
    if (!deletedBook){
      throw new NotFoundException(`Book doesn't exist with ID: ${id}`)
    }
    return { id: deletedBook.id };
  }
}
