import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationAccessService } from './workstation-access.service';

describe('WorkstationAccessService', () => {
  let service: WorkstationAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkstationAccessService],
    }).compile();

    service = module.get<WorkstationAccessService>(WorkstationAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
