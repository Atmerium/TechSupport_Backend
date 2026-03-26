import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Márka")
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Post()
  @ApiOperation({summary: "Márka hozzáadása (Csak admin hozhat létre)"})
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
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({summary: "Márka módosítása (Csak admin módosíthat)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Márka sikeresen módosítva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  //This probalby shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({summary: "Márka törlése (Frontend által nem használt, csak admin törölhet)"})
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
