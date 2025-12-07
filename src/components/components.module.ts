import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService, PrismaService],
})
export class ComponentsModule {}
