import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("brands")
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({summary: "Márka hozzáadása"})
  @ApiBody({type: CreateBrandDto})
  @ApiResponse({status: 200, description: "Márka sikeresen létrehozva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  @ApiOperation({summary: "Márkák listázása"})
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Márka lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Márka sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Márka nem található"})
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Patch(':id')
  @ApiOperation({summary: "Márka módosítása"})
  @ApiParam({name: "id", example: 1})
  @ApiBody({type: CreateBrandDto})
  @ApiResponse({status: 200, description: "Márka sikeresen módosítva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  //This probalby shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({summary: "Márka törlése (Frontend álltal nem használt)"})
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
