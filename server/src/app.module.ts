import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from '../src/prisma.service';
import { WorkstationModule } from './workstation/workstation.module';
import { WorkstationTypeModule } from './workstation-type/workstation-type.module';
import { WorkstationFeaturesModule } from './workstation-features/workstation-features.module';


@Module({
  imports: [WorkstationFeaturesModule, ConfigModule.forRoot(), WorkstationModule, WorkstationTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
