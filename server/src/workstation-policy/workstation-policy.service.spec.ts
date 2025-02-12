import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationPolicyService } from './workstation-policy.service';

describe('WorkstationPolicyService', () => {
  let service: WorkstationPolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkstationPolicyService],
    }).compile();

    service = module.get<WorkstationPolicyService>(WorkstationPolicyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
