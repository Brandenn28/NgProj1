import { Module } from '@nestjs/common';
import { WorkstationTypeService } from './workstation-type.service';
import { WorkstationTypeController } from './workstation-type.controller';

@Module({
  controllers: [WorkstationTypeController],
  providers: [WorkstationTypeService],
})
export class WorkstationTypeModule {}
