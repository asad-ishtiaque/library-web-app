import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, Length, IsBoolean, IsNotEmpty, IsOptional} from 'class-validator';

@Schema({ timestamps: true })
export class Book {
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  @Prop({ required: true })
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  @Prop()
  description: string;

  @IsString()
  @Prop()
  @IsOptional()
  coverImage?: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  author: string;

  @IsBoolean()
  @Prop({ default: false })
  isAvailable: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);

