import { Module } from '@nestjs/common';
import { WorkstationPolicyService } from './workstation-policy.service';
import { WorkstationPolicyController } from './workstation-policy.controller';

@Module({
  controllers: [WorkstationPolicyController],
  providers: [WorkstationPolicyService],
})
export class WorkstationPolicyModule {}
