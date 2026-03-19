import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("Összeállítás")
@Controller('builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Post()
  @ApiOperation({summary: "Számítógép összerakása (Csak bejelentkezett felhasználó hozhat létre)"})
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
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({summary: "Számítógép módosítása (Csak bejelentkezett felhasználó módosíthat)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Számítógép sikeresen módosítva"})
  @ApiResponse({status: 404, description: "Számítógép nem található"})
  update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildsService.update(+id, updateBuildDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @ApiOperation({summary: "Számítógép törlése (Frontend álltal nem használt, csak admin törölhet)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Számítógép sikeresen törölve"})
  @ApiResponse({status: 404, description: "Számítógép nem található"})
  remove(@Param('id') id: string) {
    return this.buildsService.remove(+id);
  }
}
