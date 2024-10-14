import { BaseSchema } from '@/common/base/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Book extends BaseSchema {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
export type BookDocument = HydratedDocument<Book>;
