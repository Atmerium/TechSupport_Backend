import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PartsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartDto: CreatePartDto) {
    return this.prisma.parts.create({ data: createPartDto });
  }

  findAll() {
    return this.prisma.parts.findMany();
  }

  async findOne(id: number) {
    const res = await this.prisma.parts.findUnique({ where: { partId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  async update(id: number, updatePartDto: UpdatePartDto) {
    const res = await this.prisma.parts.findUnique({ where: { partId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return this.prisma.parts.update({
      where: { partId: id },
      data: updatePartDto,
    });
  }

  //This one probably shouldn't be used
  async remove(id: number) {
    const res = await this.prisma.parts.findUnique({ where: { partId: id } });
    if (!res) {
      throw new NotFoundException();
    }
    return this.prisma.parts.delete({ where: { partId: id } });
  }
}
