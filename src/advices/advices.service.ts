import { Injectable } from '@nestjs/common';
import { CreateAdviceDto } from './dto/create-advice.dto';
import { UpdateAdviceDto } from './dto/update-advice.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdvicesService {
  constructor(private prisma: PrismaService) {}
  create(createAdviceDto: CreateAdviceDto) {
    return this.prisma.advices.create({data: createAdviceDto});
  }

  findAll() {
    return this.prisma.advices.findMany();
  }

  findOne(id: number) {
    return this.prisma.advices.findUnique({where: {adviceId: id}});
  }

  update(id: number, updateAdviceDto: UpdateAdviceDto) {
    return this.prisma.advices.update({where: {adviceId: id}, data: updateAdviceDto});
  }

  remove(id: number) {
    return this.prisma.advices.delete({where: {adviceId: id}});
  }
}
