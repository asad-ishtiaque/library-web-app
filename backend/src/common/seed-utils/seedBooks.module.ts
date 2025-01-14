import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../../book/book.model';
import { SeedService } from './seedBooks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
