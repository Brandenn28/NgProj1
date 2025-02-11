import { Module } from '@nestjs/common';
import { WorkstationFeaturesService } from './workstation-features.service';
import { WorkstationFeaturesController } from './workstation-features.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports:[],
  controllers: [WorkstationFeaturesController],
  providers: [WorkstationFeaturesService, PrismaService],
})
export class WorkstationFeaturesModule {}
