import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../../book/book.model';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async seedBooks() {
    const books = [
      {
        title: 'The Great Gatsby',
        description: 'A classic novel by F. Scott Fitzgerald',
        coverImage:
          'https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?t=st=1736858801~exp=1736862401~hmac=49a9277e5b6d92db731390c43b8201d6759ac7c615491b1bac9cc1e3e63dfa06&w=740',
        author: 'F. Scott Fitzgerald',
        isAvailable: true,
      },
      {
        title: '1984',
        description: 'A dystopian novel by George Orwell',
        coverImage:
          'https://img.freepik.com/free-psd/world-forest-day-poster-template_23-2148899237.jpg?t=st=1736858733~exp=1736862333~hmac=617563c516953a41d7801fe61c5efe27f5590c5a69a35223f839d1d01441bbbc&w=740',
        author: 'George Orwell',
        isAvailable: true,
      },
      {
        title: 'To Kill a Mockingbird',
        description: 'A novel by Harper Lee',
        coverImage:
          'https://img.freepik.com/free-psd/marketing-business-print-template_23-2148990530.jpg?t=st=1736858857~exp=1736862457~hmac=ada5a137d4c5231c444466680c206a077575764bb7742a47db088fadcb4e8ad2&w=740',
        author: 'Harper Lee',
        isAvailable: true,
      },
      {
        title: 'Pride and Prejudice',
        description: 'A romantic novel by Jane Austen',
        coverImage:
          'https://img.freepik.com/free-psd/poster-template-university-education_23-2148957599.jpg?t=st=1736858948~exp=1736862548~hmac=a85cec1269e2bb88b5911316ed72567504e605d9262ce91cc56a33c4cfd5254f&w=740',
        author: 'Jane Austen',
        isAvailable: true,
      },
      {
        title: 'The Catcher in the Rye',
        description: 'A coming-of-age novel by J.D. Salinger',
        coverImage:
          'https://img.freepik.com/free-psd/feel-nature-flyer-template_23-2148607911.jpg?t=st=1736859000~exp=1736862600~hmac=524863a658936c96f7d01840a6117dc9d05865676b5ed9fff065c1d215edead5&w=740',
        author: 'J.D. Salinger',
        isAvailable: true,
      },
    ];

    try {
      const existingBooks = await this.bookModel.find();
      if (existingBooks.length > 0) {
        this.logger.warn('Books are already seeded in the database.');
        return;
      }

      await this.bookModel.insertMany(books);
      this.logger.log('Books have been successfully seeded!');
    } catch (error) {
      this.logger.error('Error seeding books:', error.message);
    }
  }

  async onApplicationBootstrap() {
    this.logger.log('Seeding books...');
    await this.seedBooks();
  }
}
