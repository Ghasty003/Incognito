import { Schema,Prop } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose/dist";


@Schema()

export class User {

    @Prop()
    username: string;

    @Prop()
    password: string;
}


export const UserSchema = SchemaFactory.createForClass(User);