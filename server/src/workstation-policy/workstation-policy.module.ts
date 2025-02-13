import { Module } from '@nestjs/common';
import { WorkstationPolicyService } from './workstation-policy.service';
import { WorkstationPolicyController } from './workstation-policy.controller';
import { PrismaClient } from '@prisma/client';
@Module({
  controllers: [WorkstationPolicyController],
  providers: [WorkstationPolicyService, PrismaClient],
})
export class WorkstationPolicyModule {}
