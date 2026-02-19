import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("components")
@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({summary: "Alkatrész hozzáadása"})
  @ApiBody({type: CreateComponentDto})
  @ApiResponse({status: 200, description: "Alkatrész sikeresen létrehozva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentsService.create(createComponentDto);
  }

  @Get()
  @ApiOperation({summary: "Alkatrészek listázása"})
  findAll() {
    return this.componentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Alkatrész lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Alkatrész sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Alkatrész nem található"})
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Patch(':id')
  @ApiOperation({summary: "Alkatrész módosítása"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Alkatrész sikeresen módosítva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updateComponentDto: UpdateComponentDto) {
    return this.componentsService.update(+id, updateComponentDto);
  }

  //This probalby shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({summary: "Alkatrész törlése (Frontend álltal nem használt)"})
  remove(@Param('id') id: string) {
    return this.componentsService.remove(+id);
  }
}
