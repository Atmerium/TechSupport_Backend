import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.builds.findUnique({where: {buildId: id}});
  }

  update(id: number, updateBuildDto: UpdateBuildDto) {
    return this.prisma.builds.update({where: {buildId: id}, data: updateBuildDto});
  }

  // Shouldn't be used
  remove(id: number) {
    return this.prisma.builds.delete({where: {buildId: id}});
  }
}
