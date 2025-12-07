import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ComponentsModule } from './components/components.module';
import { AdvicesModule } from './advices/advices.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), ComponentsModule, AdvicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
