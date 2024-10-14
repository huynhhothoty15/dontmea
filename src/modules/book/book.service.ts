import { SoftDeleteModel } from 'mongoose-delete';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { BaseService } from '@/common/base/base.service';

@Injectable()
export class BookService extends BaseService<
    BookDocument,
    CreateBookDto,
    UpdateBookDto
> {
    constructor(
        @InjectModel(Book.name)
        private bookModel: SoftDeleteModel<BookDocument>,
    ) {
        super(bookModel);
    }
}
