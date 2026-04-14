import { Injectable} from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.brands.findUnique({where: {brandId: id}});
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prisma.brands.update({
      where: { brandId: id },
      data: updateBrandDto,
    });
  }

  //This one probably shouldn't be used
  remove(id: number) {
    return this.prisma.brands.delete({ where: { brandId: id } });
  }
}
