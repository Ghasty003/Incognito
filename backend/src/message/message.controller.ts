import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor (private readonly messageService: MessageService) {}


    @Post()
    async create(@Body() createDto: CreateMessageDto) {
        return this.messageService.create(createDto);
    }


    @Get("username")
    async findAll(@Param("username") username: string) {
        return this.messageService.findAll(username);
    }
}
