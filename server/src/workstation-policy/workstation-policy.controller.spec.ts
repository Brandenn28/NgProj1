import { Test, TestingModule } from '@nestjs/testing';
import { WorkstationPolicyController } from './workstation-policy.controller';
import { WorkstationPolicyService } from './workstation-policy.service';

describe('WorkstationPolicyController', () => {
  let controller: WorkstationPolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkstationPolicyController],
      providers: [WorkstationPolicyService],
    }).compile();

    controller = module.get<WorkstationPolicyController>(WorkstationPolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
