import { Module } from '@nestjs/common';
import { WorkstationFeaturesService } from './workstation-features.service';
import { WorkstationFeaturesController } from './workstation-features.controller';

@Module({
  controllers: [WorkstationFeaturesController],
  providers: [WorkstationFeaturesService],
})
export class WorkstationFeaturesModule {}
