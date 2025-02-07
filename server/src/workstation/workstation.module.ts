import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WorkstationService } from './workstation.service';
import { WorkstationController } from './workstation.controller';

@Module({
  controllers: [WorkstationController],
  providers: [WorkstationService, PrismaService],
})
export class WorkstationModule {}
