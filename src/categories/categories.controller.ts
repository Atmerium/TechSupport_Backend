import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("categories")
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard('bearer'))
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

  @UseGuards(AuthGuard('bearer'))
  @Patch(':id')
  @ApiOperation({summary: "Kategória módosítása"})
  @ApiParam({name: "id", example: 1})
  @ApiBody({type: UpdateCategoryDto})
  @ApiResponse({status: 200, description:"Kategória sikeresen módosítva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  //This probably shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({summary: "Kategória törlése (Frontend álltal nem használt)"})
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
