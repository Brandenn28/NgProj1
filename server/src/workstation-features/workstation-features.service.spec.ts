import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationFeaturesService } from './workstation-features.service';

describe('WorkstationFeaturesService', () => {
  let service: WorkstationFeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkstationFeaturesService],
    }).compile();

    service = module.get<WorkstationFeaturesService>(WorkstationFeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
