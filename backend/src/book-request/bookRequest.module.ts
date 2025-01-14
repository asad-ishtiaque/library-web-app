import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookRequest, BookRequestSchema } from './bookRequest.model';
import { BookRequestService } from './bookRequest.service';
import { BookRequestController } from './bookRequest.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookRequest.name, schema: BookRequestSchema },
    ]),
  ],
  controllers: [BookRequestController],
  providers: [BookRequestService],
})
export class BookRequestModule {}
