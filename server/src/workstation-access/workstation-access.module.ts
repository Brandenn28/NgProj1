import { Module } from '@nestjs/common';
import { WorkstationAccessService } from './workstation-access.service';
import { WorkstationAccessController } from './workstation-access.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [WorkstationAccessController],
  providers: [WorkstationAccessService, PrismaClient],
})
export class WorkstationAccessModule {}
