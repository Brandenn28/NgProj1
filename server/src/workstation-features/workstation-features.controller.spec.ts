import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationFeaturesController } from './workstation-features.controller';
import { WorkstationFeaturesService } from './workstation-features.service';

describe('WorkstationFeaturesController', () => {
  let controller: WorkstationFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkstationFeaturesController],
      providers: [WorkstationFeaturesService],
    }).compile();

    controller = module.get<WorkstationFeaturesController>(WorkstationFeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
