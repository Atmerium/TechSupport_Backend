import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brands.create({ data: createBrandDto });
  }

  findAll() {
    return this.prisma.brands.findMany();
  }

  async findOne(id: number) {
    const res = await this.prisma.brands.findUnique({where: {brandId: id}});

    if (!res) {
      throw new NotFoundException()
    }
    return res
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const res = await this.prisma.brands.findUnique({where: {brandId: id}});
    console.log(res)
    if (!res) {
      throw new NotFoundException()
    }
    else return this.prisma.brands.update({
      where: { brandId: id },
      data: updateBrandDto,
    });
  }

  //This one probably shouldn't be used
  async remove(id: number) {
    const res = await this.prisma.brands.findUnique({where: {brandId: id}});

    if (!res) {
      throw new NotFoundException()
    }
    return this.prisma.brands.delete({ where: { brandId: id } });
  }
}
