import { Body, Controller, Get, Query, Post, Delete, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor (private readonly messageService: MessageService) {}


    @Post()
    async create(@Body() createDto: CreateMessageDto) {
        return this.messageService.create(createDto);
    }


    @Get()
    async findAll(@Query("user") username: string) {
        return this.messageService.findAll(username);
    }


    @Delete(":id")
    async deleteMessage(@Param("id") _id: string) {
        return this.messageService.deleteMessage(_id);
    }
}
