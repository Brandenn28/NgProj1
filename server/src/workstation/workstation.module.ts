import { Module } from '@nestjs/common';
import { WorkstationService } from './workstation.service';
import { WorkstationController } from './workstation.controller';

@Module({
  controllers: [WorkstationController],
  providers: [WorkstationService],
})
export class WorkstationModule {}
