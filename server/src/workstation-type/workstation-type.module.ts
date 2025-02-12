import { Module } from '@nestjs/common';
import { WorkstationTypeService } from './workstation-type.service';
import { WorkstationTypeController } from './workstation-type.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [WorkstationTypeController],
  providers: [WorkstationTypeService, PrismaClient],
})
export class WorkstationTypeModule {}
