import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import * as bcrypt from "bcrypt";
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (@InjectModel(User.name) 
    private userModel: Model<User>, private jwtService: JwtService) {}


    async signUp(createDto: CreateUserDto) {
        const { password, username } = createDto;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const exists = await this.userModel.findOne({ username });

        if (exists) {
            throw new BadRequestException("User already exists");
        }

        const user = await this.userModel.create({ username, password: hash });

        const token = this.jwtService.sign({ id: user._id });

        return {
            username, token
        };
    }
}
