import { SoftDeleteModel } from 'mongoose-delete';
import mongoose, { Document } from 'mongoose';
import { Injectable } from '@nestjs/common';

/**
 * BaseService là service cung cấp các phương thức CRUD cơ bản
 * @template T Kiểu dữ liệu phải là một Document của Mongoose
 * @template C CreateDto tương ứng của model
 * @template U UpdateDto tương ứng của model
 */
@Injectable()
export class BaseService<T extends Document, C, U> {
    constructor(private readonly model: SoftDeleteModel<T>) {}

    async create(createDto: C) {
        const data = {
            ...createDto,
            createdBy: {
                name: 'tyx',
                email: 'abc@gmail.com',
                _id: new mongoose.Types.ObjectId(),
            },
        };
        const createDocument = await this.model.create(data);
        return createDocument;
    }

    async update(updateDto: U) {
        const data = {
            ...updateDto,
        };
        const updateDocument = await this.model.create(data);
        return updateDocument;
    }
}
