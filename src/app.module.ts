import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ComponentsModule } from './components/components.module';
import { AdvicesModule } from './advices/advices.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), ComponentsModule, AdvicesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
