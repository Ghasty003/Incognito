import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schema/message.schema';

@Injectable()
export class MessageService {
    constructor (
        @InjectModel(Message.name) private messageModel: Model<Message>
    ) {}


    async create(createDto: CreateMessageDto) {
        const { message, receiver} = createDto;

        if (message.length < 2) {
            throw new NotAcceptableException("Message must be at least 2 characters");
        }

        const m = await this.messageModel.create({ message, receiver });

        return m;
    }


    async findAll(username: string) {
        const messages = await this.messageModel.find({ receiver: username });

        return messages;
    }


    async deleteMessage(id: string) {
        const message = await this.messageModel.findByIdAndDelete(id);

        return message;
    }

}
