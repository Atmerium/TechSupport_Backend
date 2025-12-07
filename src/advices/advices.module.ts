import { Module } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { AdvicesController } from './advices.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AdvicesController],
  providers: [AdvicesService, PrismaService],
})
export class AdvicesModule {}
