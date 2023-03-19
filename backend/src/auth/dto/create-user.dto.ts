import { IsString, IsNotEmpty, MinLength } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    readonly username: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}