import { Controller, Post, Body, Request, ForbiddenException, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as argon2 from "argon2"
import { users } from "generated/prisma/client"
import { AuthGuard } from '@nestjs/passport'
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.userEmail)
    if (user === null) {
      throw new ForbiddenException('Invalid email or password')
    }
    if (!(await argon2.verify(user.userPassword, loginDto.userPassword))) {
      throw new ForbiddenException('Invalid email or password')
    }
    return {
      token: await this.usersService.createToken(user.userId)
    }
  }

  @Get('me')
  @UseGuards(AuthGuard('bearer'))
  me(@Request() req) {
    const user = req.user as users
    return user
  }
}
