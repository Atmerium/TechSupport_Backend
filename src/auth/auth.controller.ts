import { Controller, Post, Body, Request, ForbiddenException, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as argon2 from "argon2"
import { users } from "generated/prisma/client"
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Autentikáció")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('login')
  @ApiOperation({summary: "Bejelentkezés"})
  @ApiBody({type: LoginDto})
  @ApiResponse({status: 200, description: "Sikeres bejelentkezés"})
  @ApiResponse({status: 400, description: "Hibás felhasználó név vagy jelszó"})
  @ApiResponse({status: 404, description: "Felhasználó nem található"})
  async login(@Body() loginDto: LoginDto) {
    let user = await this.usersService.findByEmail(loginDto.userEmailName)
    if (user === null) {
      user = await this.usersService.findByUserName(loginDto.userEmailName)
     
      if (user === null) {
        throw new ForbiddenException('Invalid email/username')
      }
    }
    if (!(await argon2.verify(user.userPassword, loginDto.userPassword))) {
      throw new ForbiddenException('Invalid password')
    }
    return {
      token: await this.usersService.createToken(user.userId)
    }
  }

  @Get('me')
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @ApiOperation({summary: "Felhasználó adatai (Csak bejelentkezett felhsználó láthatja)"})
  me(@Request() req) {
    const user = req.user as users
    return user
  }
}
