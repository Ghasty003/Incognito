import { PassportStrategy } from "@nestjs/passport"
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()

export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        });
    }


    async validate(payload) {
        const { id } = payload;

        const user = await this.userModel.findById(id);

        if (!user) {
            throw new UnauthorizedException("Request is not authorized");
        }

        return user;
    }
}