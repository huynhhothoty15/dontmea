import mongooseDelete from 'mongoose-delete';
import mongoose from 'mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { ChapterModule } from './modules/chapter/chapter.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>('MONGODB_URI'),
                connectionFactory: (connection: mongoose.Connection) => {
                    connection.plugin(mongooseDelete, {
                        deletedAt: true,
                        overrideMethods: 'all',
                        deletedBy: {
                            type: {
                                _id: mongoose.Types.ObjectId,
                                email: String,
                            },
                            required: false,
                        },
                    });
                    return connection;
                },
            }),
            inject: [ConfigService],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        BookModule,
        ChapterModule,
        UserModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
