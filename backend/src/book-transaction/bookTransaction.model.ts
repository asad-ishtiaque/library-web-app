import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
  IsMongoId,
  IsDateString,
  IsBoolean,
} from 'class-validator';
import { Document, Types } from 'mongoose';
import { BookRequest } from 'src/book-request/bookRequest.model';
import { Book } from 'src/book/book.model';
import { User } from 'src/user/user.model';

@Schema({ timestamps: true })
export class BookTransaction {
  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  userId: Types.ObjectId;

  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: Book.name, required: true })
  bookId: Types.ObjectId;

  @IsDateString()
  @Prop({ type: Date, default: Date.now, required: true })
  issuedDate: Date;

  @IsDateString()
  @Prop({ type: Date, required: true })
  returnDate: Date;

  @IsBoolean()
  @Prop({ type: Boolean, default: false })
  isReturned: boolean;

  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: BookRequest.name })
  requestId?: Types.ObjectId;
}

export const BookTransactionSchema =
  SchemaFactory.createForClass(BookTransaction);
