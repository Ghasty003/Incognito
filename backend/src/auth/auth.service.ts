import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import * as bcrypt from "bcrypt";
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor (@InjectModel(User.name) private userModel: Model<User>) {}


    async signUp(createDto: CreateUserDto) {
        const { password, username } = createDto;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const exists = await this.userModel.find({ username });

        if (exists) {
            throw new BadRequestException("User already exists");
        }

        const user = await this.userModel.create({ username, password: hash });

        return user;
    }
}
