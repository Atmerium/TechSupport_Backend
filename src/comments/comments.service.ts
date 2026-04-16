import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({data: createCommentDto});
  }

  findAll() {
    return this.prisma.comments.findMany();
  }

  async findOne(id: number) {
    const res = await this.prisma.comments.findUnique({where: {commentId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return res
  }

  async findByBuildId(id: number) {
    const res = await this.prisma.comments.findUnique({where: {commentId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.comments.findMany({where: {buildId: id}});
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const res = await this.prisma.comments.findUnique({where: {commentId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.comments.update({where: {commentId: id}, data: updateCommentDto});
  }

  async remove(id: number) {
    const res = await this.prisma.comments.findUnique({where: {commentId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.comments.delete({where: {commentId: id}});
  }
}
