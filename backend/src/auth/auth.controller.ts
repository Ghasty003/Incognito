import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}


    @Post("/signup")
    async signUp(@Body() createDto: CreateUserDto) {
        return this.authService.signUp(createDto);
    }


    @Post("/login")
    async login(@Body() createDto: CreateUserDto) {
        return this.authService.login(createDto);
    }

    @Get()
    async findUser(@Query("user") username: string) {
        return this.authService.findUser(username);
    }
}
