import { Schema,Prop } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose/dist";


@Schema()

export class User {

    @Prop({ unique: [true, "User already exist"]})
    username: string;

    @Prop()
    password: string;
}


export const UserSchema = SchemaFactory.createForClass(User);