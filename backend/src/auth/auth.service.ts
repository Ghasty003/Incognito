import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
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

    
    async login(createDto: CreateUserDto) {
        const { username, password } = createDto;

        const user = await this.userModel.findOne({ username });

        if (!user) {
            throw new UnauthorizedException("Username is invalid.");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            throw new UnauthorizedException("Password is invalid");
        }

        const token = this.jwtService.sign({ id: user._id });

        return {
            username, token
        }
    }


    async findUser(username: string) {
        const user = await this.userModel.findOne({ username });

        if (!user) {
            throw new BadRequestException("User dosen't exist");
        }

        return user;
    }
}
