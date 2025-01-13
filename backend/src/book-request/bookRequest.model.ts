import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/book.model';
import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
  IsMongoId
} from 'class-validator';
import { Status } from 'src/common/types/status-types.enum';
import { User } from 'src/user/user.model';

@Schema({ timestamps: true })
export class BookRequest {
  @IsString()
  @Prop({ type: String, enum: Status, default: Status.Pending })
  status: Status

  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  requestedBy: Types.ObjectId;

  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: Book.name, required: true })
  bookId: Types.ObjectId;

  @IsDateString()
  @Prop({ type: Date, required: true })
  requestedDate: Date;

  @IsDateString()
  @Prop({ type: Date })
  responseDate?: Date;

  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: User.name })
  responseBy?: Types.ObjectId;
}

export const BookRequestSchema = SchemaFactory.createForClass(BookRequest);
