import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationTypeService } from './workstation-type.service';

describe('WorkstationTypeService', () => {
  let service: WorkstationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkstationTypeService],
    }).compile();

    service = module.get<WorkstationTypeService>(WorkstationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
