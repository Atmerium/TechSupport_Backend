import { Injectable } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ComponentsService {
  constructor(private prisma: PrismaService) {}

  create(createComponentDto: CreateComponentDto) {
    return this.prisma.components.create({data: createComponentDto});
  }

  findAll() {
    return this.prisma.components.findMany();
  }

  findOne(id: number) {
    return this.prisma.components.findUnique({where: {componentId: id}});
  }

  update(id: number, updateComponentDto: UpdateComponentDto) {
    return this.prisma.components.update({where: {componentId: id}, data: updateComponentDto});
  }

  remove(id: number) {
    return this.prisma.components.delete({where: {componentId: id}});
  }
}
