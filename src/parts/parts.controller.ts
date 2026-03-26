import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("Alkatrész")
@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Post()
  @ApiOperation({summary: "Alkatrész hozzáadása (Csak admin hozhat létre)"})
  @ApiBody({type: CreatePartDto})
  @ApiResponse({status: 200, description:"Alkatrész sikeresen létrehozva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  create(@Body() createPartDto: CreatePartDto) {
    return this.partsService.create(createPartDto);
  }

  @Get()
  @ApiOperation({summary: "Alkatrészek listázása"})
  findAll() {
    return this.partsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Alkatrész lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description:"Alkatrész sikeresen lekérve"})
  @ApiResponse({status: 404, description:"Alkatrész nem található"})
  findOne(@Param('id') id: string) {
    return this.partsService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({summary: "Alkatrész módosítása (Csak admin módosíthat)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description:"Alkatrész sikeresen módosítva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partsService.update(+id, updatePartDto);
  }

  //This probably shouldn't be used
  @Delete(':id')
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @ApiOperation({summary: "Alkatrész törlése (Frontend által nem használt, csak admin törölhet)"})
  remove(@Param('id') id: string) {
    return this.partsService.remove(+id);
  }
}
