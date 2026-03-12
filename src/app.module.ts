import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from './users/users.module';
import { PartsModule } from './parts/parts.module';
import { AuthModule } from './auth/auth.module';
import { BuildsModule } from './builds/builds.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), BrandsModule, UsersModule, PartsModule, AuthModule, BuildsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
