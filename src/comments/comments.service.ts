import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.comments.findUnique({where: {commentId: id}});
  }

  findByBuildId(id: number) {
    return this.prisma.comments.findMany({where: {buildId: id}});
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comments.update({where: {commentId: id}, data: updateCommentDto});
  }

  remove(id: number) {
    return this.prisma.comments.delete({where: {commentId: id}});
  }
}
