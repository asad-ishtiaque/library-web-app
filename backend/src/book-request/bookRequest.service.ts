import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookRequest } from './bookRequest.model';
import { CreateBookRequestDto } from './dto/create-book-request.dto';

@Injectable()
export class BookRequestService {
  constructor(
    @InjectModel(BookRequest.name)
    private readonly bookRequestModel: Model<BookRequest>,
  ) {}

  async findAll() {
    return await this.bookRequestModel
      .find()
      .populate(['requestedBy', 'bookId']);
  }

  async findById(id: string) {
    const bookRequest = await this.bookRequestModel
      .findById(id)
      .populate(['requestedBy', 'bookId']);

    if (!bookRequest) {
      throw new NotFoundException(`BookRequest with ID ${id} not found`);
    }
    return bookRequest;
  }

  async create(createBookRequestDto: CreateBookRequestDto) {
    const newBookRequest = new this.bookRequestModel(createBookRequestDto);
    return await newBookRequest.save();
  }

  //   async update(id: string, updateBookRequestDto: UpdateBookRequestDto) {
  //     const updatedBookRequest = await this.bookRequestModel
  //       .findByIdAndUpdate(id, updateBookRequestDto, { new: true })

  //     if (!updatedBookRequest) {
  //       throw new NotFoundException(`BookRequest with ID ${id} not found`);
  //     }

  //     return updatedBookRequest;
  //   }

  async delete(id: string) {
    const deletedReq = await this.bookRequestModel.findByIdAndDelete(id).exec();

    if (!deletedReq) {
      throw new NotFoundException(`BookRequest with ID ${id} not found`);
    }
    return { id: deletedReq._id };
  }
}
