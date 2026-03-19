import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Felhasználó")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({summary: "Felhasználó felvétele"})
  @ApiBody({ type: CreateUserDto})
  @ApiResponse({status: 200, description: "Felhasználó sikeresen létrehozva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //this shouldn't be used
  @Get()
  @ApiOperation({summary: "Felhasználók listázása (Frontend álltal nem használt)"})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Felhasználó lekérése id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Felhasználó sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Felhasználó nem található"})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({summary: "Felhasználó módosítása id alapján (Csak bejelentkezett felhasználó)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Felhasználó sikeresen módosítva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  @ApiResponse({status: 404, description: "Felhasználó nem található"})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  //This probably shouldn't be used
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({summary: "Felhasználó törlése (Frontend álltal nem használt, csak admin törölhet)"})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
