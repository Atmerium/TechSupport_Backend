import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as crypto from 'crypto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      userPassword: await argon2.hash(createUserDto.userPassword),
    };
    return this.prisma.users.create({
      data: newUser,
      omit: {
        userPassword: true,
      },
    });
  }

  async createToken(id: number) {
    const newToken = crypto.randomBytes(32).toString('hex');
    await this.prisma.token.create({
      data: {
        token: newToken,
        user: {
          connect: { userId: id },
        },
      },
    });
    return newToken;
  }

  async findByEmail(email: string) {
    const res = await this.prisma.users.findUnique({
      where: { userEmail: email },
    });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  async findByUserName(userName: string) {
    const res = await this.prisma.users.findUnique({
      where: { userName: userName },
    });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(id: number) {
    const res = await this.prisma.users.findUnique({ where: { userId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.prisma.users.findUnique({ where: { userId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return this.prisma.users.update({
      where: { userId: id },
      data: updateUserDto,
    });
  }

  //This one probably shouldn't be used
  async remove(id: number) {
    const res = await this.prisma.users.findUnique({ where: { userId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return this.prisma.users.delete({ where: { userId: id } });
  }
}
