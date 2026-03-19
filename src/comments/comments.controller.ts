import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("Komment")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(AuthGuard("bearer"))
  @ApiBearerAuth()
  @Post()
  @ApiOperation({summary: "Komment hozzáadása (Csak bejelentkezett felhasználó kommentelhet)"})
  @ApiBody({type: CreateCommentDto})
  @ApiResponse({status: 200, description: "Komment sikeresen hozzáadva"})
  @ApiResponse({status: 400, description: "Hibásan megadott adatok"})
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({summary: "Kommentek listázása"})
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Komment listázása id alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Komment sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Komment nem található"})
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Get('bybuild/:id')
  @ApiOperation({summary: "Komment listázása buildId alapján"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Komment sikeresen lekérve"})
  @ApiResponse({status: 404, description: "Komment nem található"})
  findByBuildId(@Param('id') id: string) {
    return this.commentsService.findByBuildId(+id);
  }

  @UseGuards(AuthGuard("bearer"))
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({summary: "Komment módosítása (Csak bejelentkezett felhasználó módosíthat)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Komment sikeresen módosítva"})
  @ApiResponse({status: 404, description: "Komment nem található"})
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('bearer'))
  @ApiBearerAuth()
  @ApiOperation({summary: "Komment törlése (Csak bejelentkezett felhasználó törölhet)"})
  @ApiParam({name: "id", example: 1})
  @ApiResponse({status: 200, description: "Komment sikeresen módosítva"})
  @ApiResponse({status: 404, description: "Komment nem található"})
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
