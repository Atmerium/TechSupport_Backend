import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as crypto from "crypto"
import * as argon2 from "argon2"

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      role: "user",
      password: await argon2.hash(createUserDto.userPassword)
    }
    return this.prisma.users.create({data: newUser, omit: {
      userPassword: true
    }});
  }

  async createToken(id: number) {
    const newToken = crypto.randomBytes(32).toString("hex")
    await this.prisma.token.create({
      data: {
        token: newToken,
        user: {
          connect: {userId: id}
        }}
    })
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: {userEmail: email},
    })
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({where: {userId: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({where: {userId: id}, data: updateUserDto});
  }

  //This one probably shouldn't be used
  remove(id: number) {
    return this.prisma.users.delete({where: {userId: id}});
  }
}
