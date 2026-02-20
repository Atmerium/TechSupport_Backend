import { Injectable, UseGuards } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PartsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartDto: CreatePartDto) {
    return this.prisma.parts.create({data: createPartDto});
  }

  findAll() {
    return this.prisma.parts.findMany();
  }

  findOne(id: number) {
    return this.prisma.parts.findUnique({where: { partId: id}});
  }

  update(id: number, updatePartDto: UpdatePartDto) {
    return this.prisma.parts.update({where: {partId: id}, data: updatePartDto});
  }

  //This one probably shouldn't be used
  remove(id: number) {
    return this.prisma.parts.delete({where: {partId: id}});
  }
}
