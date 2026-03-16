import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("builds")
@Controller('builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({summary: "Számítógép összerakása"})
  @ApiBody({type: CreateBuildDto})
  @ApiResponse({status: 200, description: "Számítógép sikeresen összerakva"})
  @ApiResponse({status: 400, description: "hibásan megadott adatok"})
  create(@Body() createBuildDto: CreateBuildDto) {
    return this.buildsService.create(createBuildDto);
  }

  @Get()
  @ApiOperation({summary: "Számitógépek listázása"})
  findAll() {
    return this.buildsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Számítógép lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Számítógép sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Számítógép nem található"})
  findOne(@Param('id') id: string) {
    return this.buildsService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Patch(':id')
  @ApiOperation({summary: "Számítógép módosítása"})
  @ApiParam({name: "id", example: 1})
  @ApiBody({type: CreateBuildDto})
  @ApiResponse({status: 200, description: "Számítógép sikeresen módosítva"})
  @ApiResponse({status: 404, description: "Számítógép nem található"})
  update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildsService.update(+id, updateBuildDto);
  }

  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({summary: "Számítógép törlése"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Számítógép sikeresen törölve"})
  @ApiResponse({status: 404, description: "Számítógép nem található"})
  remove(@Param('id') id: string) {
    return this.buildsService.remove(+id);
  }
}
