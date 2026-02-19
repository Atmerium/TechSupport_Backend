/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from "passport-http-bearer";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async validate(token: string) {
        const tokenObj = await this.prisma.token.findUnique({
            where: { token },
        })
        if (!tokenObj) {
            throw new ForbiddenException('Invalid token')
        }
        const user = await this.prisma.users.findUniqueOrThrow({
            where: { userId: tokenObj.userId },
            omit: { userPassword: true }
        })
        return user
    }
}