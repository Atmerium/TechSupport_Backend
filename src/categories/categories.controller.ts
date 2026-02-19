import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("categories")
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({summary: "Kategória hozzáadása"})
  @ApiBody({type: CreateCategoryDto})
  @ApiResponse({status: 200, description:"Kategória sikeresen létrehozva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({summary: "Kategóriák listázása"})
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Kategória lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description:"Kategória sikeresen lekérve"})
  @ApiResponse({status: 404, description:"Kategória nem található"})
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: "Kategória módosítása"})
  @ApiBody({type: UpdateCategoryDto})
  @ApiResponse({status: 200, description:"Kategória sikeresen módosítva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  //This probably shouldn't be used
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
