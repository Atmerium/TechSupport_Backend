import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("parts")
@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({summary: "Alkatrész hozzáadása"})
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
  @Patch(':id')
  @ApiOperation({summary: "Alkatrész módosítása"})
  @ApiParam({name: "id", example: 1})
  @ApiBody({type: UpdatePartDto})
  @ApiResponse({status: 200, description:"Alkatrész sikeresen módosítva"})
  @ApiResponse({status: 400, description:"Hibásan megadott adatok"})
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partsService.update(+id, updatePartDto);
  }

  //This probably shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({summary: "Alkatrész törlése (Frontend álltal nem használt)"})
  remove(@Param('id') id: string) {
    return this.partsService.remove(+id);
  }
}
