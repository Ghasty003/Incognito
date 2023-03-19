import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Message {

    @Prop()
    receiver: string;

    @Prop()
    message: string;
}


export const MessageSchema = SchemaFactory.createForClass(Message);