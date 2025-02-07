import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
// import { PrismaService } from '../src/prisma.service';
import { WorkstationModule } from './workstation/workstation.module';
import { WorkstationTypeModule } from './workstation-type/workstation-type.module';
import { WorkstationFeaturesModule } from './workstation-features/workstation-features.module';


@Module({
  imports: [UsersModule, CommentsModule, ConfigModule.forRoot(), WorkstationModule, WorkstationTypeModule, WorkstationFeaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
