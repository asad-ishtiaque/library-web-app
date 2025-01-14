import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBModule } from './common/db/db.module';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { BookRequestModule } from './book-request/bookRequest.module';
import { BookTransactionModule } from './book-transaction/bookTransaction.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './common/seed-utils/seedBooks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DBModule,
    BookModule,
    BookRequestModule,
    BookTransactionModule,
    UserModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
