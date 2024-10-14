import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class BaseSchema {
    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Types.ObjectId;
        name: string;
        email: string;
    };

    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Types.ObjectId;
        name: string;
        email: string;
    };

    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Types.ObjectId;
        email: string;
    };
}
