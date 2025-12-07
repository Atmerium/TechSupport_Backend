import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { CreateAdviceDto } from './dto/create-advice.dto';
import { UpdateAdviceDto } from './dto/update-advice.dto';

@Controller('advices')
export class AdvicesController {
  constructor(private readonly advicesService: AdvicesService) {}

  @Post()
  create(@Body() createAdviceDto: CreateAdviceDto) {
    return this.advicesService.create(createAdviceDto);
  }

  @Get()
  findAll() {
    return this.advicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdviceDto: UpdateAdviceDto) {
    return this.advicesService.update(+id, updateAdviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advicesService.remove(+id);
  }
}
