import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BuildsService {
  constructor (private readonly prisma: PrismaService){}
  create(createBuildDto: CreateBuildDto) {
    return this.prisma.builds.create({data: createBuildDto});
  }

  findAll() {
    return this.prisma.builds.findMany();
  }

  async findOne(id: number) {
    const res = await this.prisma.builds.findUnique({where: {buildId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return res
  }

  async update(id: number, updateBuildDto: UpdateBuildDto) {
    const res = await this.prisma.builds.findUnique({where: {buildId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.builds.update({where: {buildId: id}, data: updateBuildDto});
  }

  // Shouldn't be used
  async remove(id: number) {
    const res = await this.prisma.builds.findUnique({where: {buildId: id}});
    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.builds.delete({where: {buildId: id}});
  }
}
