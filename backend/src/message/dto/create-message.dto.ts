import { IsNotEmpty, IsString } from "class-validator";


export class CreateMessageDto {

    @IsString()
    @IsNotEmpty()
    readonly message: string;

    @IsString()
    @IsNotEmpty()
    readonly receiver: string;
}