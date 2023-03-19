import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageSchema } from './schema/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: "Message", schema: MessageSchema }])
  ],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
