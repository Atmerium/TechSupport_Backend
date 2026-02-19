import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({data: createCategoryDto});
  }

  findAll() {
    return this.prisma.categories.findMany();
  }

  findOne(id: number) {
    return this.prisma.categories.findUnique({where: { categoryId: id}});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categories.update({where: {categoryId: id}, data: updateCategoryDto});
  }

  //This one probably shouldn't be used
  remove(id: number) {
    return this.prisma.categories.delete({where: {categoryId: id}});
  }
}
