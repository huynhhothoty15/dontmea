import { CreateBookDto } from '@/modules/book/dto/create-book.dto';
import { ISwaggerExample } from '@/common/interfaces/api';

export const createBookExample: ISwaggerExample<CreateBookDto> = {
    exam1: {
        summary: 'vd1',
        value: {
            description: 'abc',
            name: 'abc',
        },
    },
};
